import styled, { css } from '@magister_zito/vue3-styled-components'

const prefix = 'vc-'

export const Classes = {
  vcTableWrapper: `${prefix}table-wrapper`,
  vcTable: `${prefix}table`,
  vcTableHeader: `${prefix}table-header`,
  vcTableBody: `${prefix}table-body`,
  vcTableFooter: `${prefix}table-footer`,
  vcTableHeaderRow: `${prefix}table-header-row`,
  vcTableHeaderCell: `${prefix}table-header-cell`,
  vcTableRow: `${prefix}table-row`,
  vcTableCell: `${prefix}table-cell`
}

export type BaseTableCssVariables = Partial<{
  /**
   * height of table row.
   * Tip: The property is css-variable. Can't use number as abbreviation.
   */
  '--row-height': string
  /**
   * font color of table
   */
  '--color': string
  /**
   * background color of table
   */
  '--bgcolor': string
  /**
   * background color when the cursor is hovering
   */
  '--hover-bgcolor': string
  /**
   * background color when the table row is highlighted
   */
  '--highlight-bgcolor': string

  /**
   * header height of table row.
   * Tip: The property is css-variable. Can't use number as abbreviation.
   */
  '--header-row-height': string
  /**
   * font color of table header
   */
  '--header-color': string
  /**
   * background color of table header
   */
  '--header-bgcolor': string
  /**
   * background color when the cursor is hovering in the table header
   */
  '--header-hover-bgcolor': string
  /**
   * background color when the table row is highlighted in the table header
   */
  '--header-highlight-bgcolor': string

  '--cell-padding': string
  '--font-size': string
  '--line-height': string
  /**
   * shadow of the table cell when the cell is locked
   */
  '--lock-shadow': string

  '--border-color': string
  /**
   * border property of the table cell
   * default value is 1px solid var(--border-color)
   */
  '--cell-border': string
  /**
   * horizontal border property of the table cell
   * default value is 1px solid var(--border-color)
   */
  '--cell-border-horizontal': string
  /**
   * vertical border property of the table cell
   * default value is 1px solid var(--border-color)
   */
  '--cell-border-vertical': string
  /**
   * border property of the table header cell
   * default value is 1px solid var(--border-color)
   */
  '--header-cell-border': string
  /**
   * horizontal border property of the table header cell
   * default value is 1px solid var(--border-color)
   */
  '--header-cell-border-horizontal': string
  /**
   * vertical border property of the table header cell
   * default value is 1px solid var(--border-color)
   */
  '--header-cell-border-vertical': string
}>

const outerBorderStyleMixin = css`
  border-top: var(cell-border-horizontal);
  border-left: var(cell-border-vertical);
  border-bottom: var(cell-border-horizontal);
  border-right: var(cell-border-vertical);

  td.first,
  th.first {
    border-left: none;
  }

  td.last,
  th.last {
    border-right: none;
  }
`

export const StyledVcTableWrapper = styled.div`
  --row-height: 48px;
  --color: #333;
  --bgcolor: white;
  --hover-bgcolor: var(--hover-color, #f5f5f5);
  --highlight-bgcolor: #eee;

  --header-row-height: 32px;
  --header-color: #5a6c84;
  --header-bgcolor: #e9edf2;
  --header-hover-bgcolor: #ddd;
  --header-highlight-bgcolor: #e4e8ed;

  --cell-padding: 8px 12px;
  --font-size: 12px;
  --line-height: 1.28571;
  --lock-shadow: rgba(152, 152, 152, 0.5) 0 0 6px 2px;

  --border-color: #dfe3e8;
  --cell-border: 1px solid var(--border-color);
  --cell-border-horizontal: var(--cell-border);
  --cell-border-vertical: var(--cell-border);
  --header-cell-border: 1px solid var(--border-color);
  --header-cell-border-horizontal: var(--header-cell-border);
  --header-cell-border-vertical: var(--header-cell-border);

  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  cursor: default;
  color: var(--color);
  font-size: var(--font-size);
  line-height: var(--line-height);
  position: relative;
  overflow-anchor: none;

  /**
   * table border be provided by outer wrapper instead of cell when userOuterBorder equal true.
   */
  &.use-outer-border {
    ${outerBorderStyleMixin};
  }

  .${Classes.vcTableHeader} {
    overflow-x: auto;
    overflow-y: hidden;
    background: var(--header-bgcolor);
  }

  .${Classes.vcTableBody}. ${Classes.vcTableFooter} {
    overflow-x: auto;
    overflow-y: hidden;
    background: var(--bgcolor);
  }

  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0;
    display: table;
    margin: 0;
    padding: 0;
  }

  th {
    font-weight: normal;
    text-align: left;
    padding: var(--cell-padding);
    height: var(--header-row-height);
    color: var(--header-color);
    background: var(--header-bgcolor);
    border: none;
    border-right: var(--header-cell-border-vertical);
    border-bottom: var(--header-cell-border-horizontal);
  }

  th.first {
    border-left: var(--header-cell-border-vertical);
  }

  tr.first th {
    border-top: var(--header-cell-border-horizontal);
  }

  td {
    padding: var(--cell-padding);
    background: var(--bgcolor);
    height: var(--row-height);
    border: none;
    border-right: var(--cell-border-vertical);
    border-bottom: var(--cell-border-horizontal);
  }

  td.first {
    border-left: var(--cell-border-vertical);
  }
  tr.first td {
    border-top: var(--cell-border-horizontal);
  }

  &.has-header tbody tr.first td {
    border-top: none;
  }
`
