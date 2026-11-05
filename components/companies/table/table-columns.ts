export const TABLE_COLUMNS = [
  { key: "name", className: "justify-start" },
  { key: "segment", className: "justify-start" },
  { key: "owner", className: "justify-start" },
  {
    key: "openDeals",
    className: "justify-end tabular-nums",
  },
  {
    key: "pipelineValue",
    className: "justify-end tabular-nums",
  },
  {
    key: "winProbability",
    className: "justify-end tabular-nums",
  },
  { key: "trend", className: "justify-center" },
  {
    key: "lastInteraction",
    className: "justify-start",
  },
  { key: "action", className: "justify-center" },
] as const;

export type TableColumnKey = (typeof TABLE_COLUMNS)[number]["key"];

export const TABLE_GRID_CLASS =
  "grid min-w-max grid-cols-[repeat(9,max-content)] justify-between";

export const TABLE_ROW_CLASS = "col-span-full grid grid-cols-subgrid";

export const TABLE_CELL_CLASS = "flex items-center";

export function columnClass(key: TableColumnKey) {
  return TABLE_COLUMNS.find((column) => column.key === key)?.className ?? "";
}
