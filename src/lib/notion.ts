import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATA_SOURCE_ID = process.env.NOTION_DATA_SOURCE_ID!;

export interface ConsultingClient {
  id: string;
  name: string;
  status: string;
  industry: string;
  role: string;
  orgSize: string;
  purpose: string;
  automationAreas: string;
  tools: string[];
  budget: string;
  techLevel: string;
  priority: string;
  currentSession: number;
  totalSessions: number;
  startDate: string;
  clientId: string;
  content: string;
}

function getTextProperty(properties: Record<string, unknown>, key: string): string {
  const prop = properties[key] as { type: string; rich_text?: { plain_text: string }[]; title?: { plain_text: string }[] };
  if (prop?.type === 'title' && prop.title) {
    return prop.title.map((t) => t.plain_text).join('');
  }
  if (prop?.type === 'rich_text' && prop.rich_text) {
    return prop.rich_text.map((t) => t.plain_text).join('');
  }
  return '';
}

function getSelectProperty(properties: Record<string, unknown>, key: string): string {
  const prop = properties[key] as { type: string; select?: { name: string } | null };
  return prop?.select?.name ?? '';
}

function getMultiSelectProperty(properties: Record<string, unknown>, key: string): string[] {
  const prop = properties[key] as { type: string; multi_select?: { name: string }[] };
  return prop?.multi_select?.map((s) => s.name) ?? [];
}

function getNumberProperty(properties: Record<string, unknown>, key: string): number {
  const prop = properties[key] as { type: string; number?: number | null };
  return prop?.number ?? 0;
}

function getDateProperty(properties: Record<string, unknown>, key: string): string {
  const prop = properties[key] as { type: string; date?: { start: string } | null };
  return prop?.date?.start ?? '';
}

function getUniqueIdProperty(properties: Record<string, unknown>, key: string): string {
  const prop = properties[key] as { type: string; unique_id?: { prefix: string; number: number } };
  if (prop?.unique_id) {
    return `${prop.unique_id.prefix}-${prop.unique_id.number}`;
  }
  return '';
}

export async function getClients(): Promise<ConsultingClient[]> {
  if (!process.env.NOTION_API_KEY || process.env.NOTION_API_KEY === 'your_notion_integration_token_here') {
    return [];
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await notion.dataSources.query({
      data_source_id: DATA_SOURCE_ID,
      sorts: [{ property: '상태', direction: 'ascending' }],
    } as any);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.results.map((page: any) => {
      const props = page.properties;
      return {
        id: page.id,
      name: getTextProperty(props, '고객명'),
      status: getSelectProperty(props, '상태'),
      industry: getTextProperty(props, '업종'),
      role: getTextProperty(props, '직무'),
      orgSize: getSelectProperty(props, '조직규모'),
      purpose: getTextProperty(props, '컨설팅 목적'),
      automationAreas: getTextProperty(props, '자동화 희망 영역'),
      tools: getMultiSelectProperty(props, '사용 툴'),
      budget: getSelectProperty(props, '예산'),
      techLevel: getSelectProperty(props, '기술 숙련도'),
      priority: getTextProperty(props, '우선순위'),
      currentSession: getNumberProperty(props, '진행 회차'),
      totalSessions: getNumberProperty(props, '총 회차'),
      startDate: getDateProperty(props, '시작일'),
      clientId: getUniqueIdProperty(props, '고객 ID'),
      content: '',
    };
  });
  } catch (error) {
    console.error('Failed to fetch clients from Notion:', error);
    return [];
  }
}

export async function getClient(pageId: string): Promise<ConsultingClient | null> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const page: any = await notion.pages.retrieve({ page_id: pageId });
    const props = page.properties;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const blocks: any = await notion.blocks.children.list({ block_id: pageId });
    const content = blocks.results
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((block: any) => {
        const blockData = block[block.type];
        if (blockData?.rich_text) {
          return blockData.rich_text.map((t: { plain_text: string }) => t.plain_text).join('');
        }
        return '';
      })
      .filter(Boolean)
      .join('\n');

    return {
      id: page.id,
      name: getTextProperty(props, '고객명'),
      status: getSelectProperty(props, '상태'),
      industry: getTextProperty(props, '업종'),
      role: getTextProperty(props, '직무'),
      orgSize: getSelectProperty(props, '조직규모'),
      purpose: getTextProperty(props, '컨설팅 목적'),
      automationAreas: getTextProperty(props, '자동화 희망 영역'),
      tools: getMultiSelectProperty(props, '사용 툴'),
      budget: getSelectProperty(props, '예산'),
      techLevel: getSelectProperty(props, '기술 숙련도'),
      priority: getTextProperty(props, '우선순위'),
      currentSession: getNumberProperty(props, '진행 회차'),
      totalSessions: getNumberProperty(props, '총 회차'),
      startDate: getDateProperty(props, '시작일'),
      clientId: getUniqueIdProperty(props, '고객 ID'),
      content,
    };
  } catch {
    return null;
  }
}
