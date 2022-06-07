import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TablesDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/tables"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Table
      </Typography>
      <Typography className="description">
        Tables display sets of data. They can be fully customized.
      </Typography>

      <Typography className="mb-40" component="div">
        Tables display information in a way that&#39;s easy to scan, so that users can look for
        patterns and insights. They can be embedded in primary content, such as cards. They can
        include:
      </Typography>
      <ul>
        <li>A corresponding visualization</li>
        <li>Navigation</li>
        <li>Tools to query and manipulate data</li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic table
      </Typography>
      <Typography className="mb-40" component="div">
        A simple example with no frills.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/tables/BasicTable.js').default}
          raw={require('!raw-loader!../components/tables/BasicTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Data table
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>Table</code> component has a close mapping to the native <code>{`<table>`}</code>{' '}
        elements. This constraint makes building rich data tables challenging.
      </Typography>
      <Typography className="mb-40" component="div">
        The{' '}
        <a href="/x/react-data-grid/">
          <code>DataGrid</code> component
        </a>{' '}
        is designed for use-cases that are focused on handling large amounts of tabular data. While
        it comes with a more rigid structure, in exchange, you gain more powerful features.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DataTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/tables/DataTable.js').default}
          raw={require('!raw-loader!../components/tables/DataTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Dense table
      </Typography>
      <Typography className="mb-40" component="div">
        A simple example of a dense table with no frills.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DenseTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/tables/DenseTable.js').default}
          raw={require('!raw-loader!../components/tables/DenseTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sorting &amp; selecting
      </Typography>
      <Typography className="mb-40" component="div">
        This example demonstrates the use of <code>Checkbox</code> and clickable rows for selection,
        with a custom <code>Toolbar</code>. It uses the <code>TableSortLabel</code> component to
        help style column headings.
      </Typography>
      <Typography className="mb-40" component="div">
        The Table has been given a fixed width to demonstrate horizontal scrolling. In order to
        prevent the pagination controls from scrolling, the TablePagination component is used
        outside of the Table. (The{' '}
        <a href="#custom-pagination-actions">&#39;Custom Table Pagination Action&#39; example</a>{' '}
        below shows the pagination within the TableFooter.)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="EnhancedTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/tables/EnhancedTable.js').default}
          raw={require('!raw-loader!../components/tables/EnhancedTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Customization
      </Typography>
      <Typography className="mb-40" component="div">
        Here is an example of customizing the component. You can learn more about this in the{' '}
        <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedTables.js"
          className="my-24"
          iframe={false}
          component={require('../components/tables/CustomizedTables.js').default}
          raw={require('!raw-loader!../components/tables/CustomizedTables.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Custom pagination options
      </Typography>
      <Typography className="mb-40" component="div">
        It&#39;s possible to customize the options shown in the &quot;Rows per page&quot; select
        using the <code>rowsPerPageOptions</code> prop. You should either provide an array of:
      </Typography>
      <ul>
        <li>
          <Typography className="mb-40" component="div">
            <strong>numbers</strong>, each number will be used for the option&#39;s label and value.
          </Typography>

          <FuseHighlight component="pre" className="language-jsx">
            {` 
<TablePagination rowsPerPageOptions={[10, 50]} />
`}
          </FuseHighlight>
        </li>
        <li>
          <Typography className="mb-40" component="div">
            <strong>objects</strong>, the <code>value</code> and <code>label</code> keys will be
            used respectively for the value and label of the option (useful for language strings
            such as &#39;All&#39;).
          </Typography>

          <FuseHighlight component="pre" className="language-jsx">
            {` 
<TablePagination rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]} />
`}
          </FuseHighlight>
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Custom pagination actions
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>ActionsComponent</code> prop of the <code>TablePagination</code> component allows
        the implementation of custom actions.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomPaginationActionsTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/tables/CustomPaginationActionsTable.js').default}
          raw={require('!raw-loader!../components/tables/CustomPaginationActionsTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sticky header
      </Typography>
      <Typography className="mb-40" component="div">
        Here is an example of a table with scrollable rows and fixed column headers. It leverages
        the <code>stickyHeader</code> prop. (⚠️ no IE 11 support)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="StickyHeadTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/tables/StickyHeadTable.js').default}
          raw={require('!raw-loader!../components/tables/StickyHeadTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Column grouping
      </Typography>
      <Typography className="mb-40" component="div">
        You can group column headers by rendering multiple table rows inside a table head:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<TableHead>
  <TableRow />
  <TableRow />
</TableHead>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColumnGroupingTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/tables/ColumnGroupingTable.js').default}
          raw={require('!raw-loader!../components/tables/ColumnGroupingTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Collapsible table
      </Typography>
      <Typography className="mb-40" component="div">
        An example of a table with expandable rows, revealing more information. It utilizes the{' '}
        <a href="/material-ui/api/collapse/">
          <code>Collapse</code>
        </a>{' '}
        component.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CollapsibleTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/tables/CollapsibleTable.js').default}
          raw={require('!raw-loader!../components/tables/CollapsibleTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Spanning table
      </Typography>
      <Typography className="mb-40" component="div">
        A simple example with spanning rows &amp; columns.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SpanningTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/tables/SpanningTable.js').default}
          raw={require('!raw-loader!../components/tables/SpanningTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Virtualized table
      </Typography>
      <Typography className="mb-40" component="div">
        In the following example, we demonstrate how to use{' '}
        <a href="https://github.com/bvaughn/react-virtualized">react-virtualized</a> with the{' '}
        <code>Table</code> component. It renders 200 rows and can easily handle more. Virtualization
        helps with performance issues.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ReactVirtualizedTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/tables/ReactVirtualizedTable.js').default}
          raw={require('!raw-loader!../components/tables/ReactVirtualizedTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI tutorial:{' '}
        <a href="https://www.w3.org/WAI/tutorials/tables/">
          https://www.w3.org/WAI/tutorials/tables/
        </a>
        )
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Caption
      </Typography>
      <Typography className="mb-40" component="div">
        A caption functions like a heading for a table. Most screen readers announce the content of
        captions. Captions help users to find a table and understand what it&#39;s about and decide
        if they want to read it.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AcccessibleTable.js"
          className="my-24"
          iframe={false}
          component={require('../components/tables/AcccessibleTable.js').default}
          raw={require('!raw-loader!../components/tables/AcccessibleTable.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Unstyled
      </Typography>
      <Typography className="mb-40" component="div">
        If you would like to use an unstyled Table, you can use the primitive HTML elements and
        enhance the table with the TablePaginationUnstyled component. See the demos in the{' '}
        <a href="/base/react-table-pagination/">unstyled table pagination docs</a>
      </Typography>
    </>
  );
}

export default TablesDoc;
