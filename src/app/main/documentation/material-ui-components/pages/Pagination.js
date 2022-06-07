import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function PaginationDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/pagination"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Pagination
      </Typography>
      <Typography className="description">
        The Pagination component enables the user to select a specific page from a range of pages.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic pagination
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicPagination.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/BasicPagination.js').default}
          raw={require('!raw-loader!../components/pagination/BasicPagination.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Outlined pagination
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationOutlined.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/PaginationOutlined.js').default}
          raw={require('!raw-loader!../components/pagination/PaginationOutlined.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Rounded pagination
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationRounded.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/PaginationRounded.js').default}
          raw={require('!raw-loader!../components/pagination/PaginationRounded.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Pagination size
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationSize.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/PaginationSize.js').default}
          raw={require('!raw-loader!../components/pagination/PaginationSize.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Buttons
      </Typography>
      <Typography className="mb-40" component="div">
        You can optionally enable first-page and last-page buttons, or disable the previous-page and
        next-page buttons.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/PaginationButtons.js').default}
          raw={require('!raw-loader!../components/pagination/PaginationButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Custom icons
      </Typography>
      <Typography className="mb-40" component="div">
        It&#39;s possible to customize the control icons.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomIcons.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/CustomIcons.js').default}
          raw={require('!raw-loader!../components/pagination/CustomIcons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Pagination ranges
      </Typography>
      <Typography className="mb-40" component="div">
        You can specify how many digits to display either side of current page with the{' '}
        <code>siblingRange</code> prop, and adjacent to the start and end page number with the{' '}
        <code>boundaryRange</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationRanges.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/PaginationRanges.js').default}
          raw={require('!raw-loader!../components/pagination/PaginationRanges.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Controlled pagination
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationControlled.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/PaginationControlled.js').default}
          raw={require('!raw-loader!../components/pagination/PaginationControlled.js')}
        />
      </Typography>
      {/*   <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Router integration
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PaginationLink.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/PaginationLink.js').default}
          raw={require('!raw-loader!../components/pagination/PaginationLink.js')}
        />
      </Typography> */}
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        <code>usePagination</code>
      </Typography>
      <Typography className="mb-40" component="div">
        For advanced customization use cases, a headless <code>usePagination()</code> hook is
        exposed. It accepts almost the same options as the Pagination component minus all the props
        related to the rendering of JSX. The Pagination component is built on this hook.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import { usePagination } from '@mui/material/Pagination';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UsePagination.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/UsePagination.js').default}
          raw={require('!raw-loader!../components/pagination/UsePagination.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Table pagination
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>Pagination</code> component was designed to paginate a list of arbitrary items
        when infinite loading isn&#39;t used. It&#39;s preferred in contexts where SEO is important,
        for instance, a blog.
      </Typography>
      <Typography className="mb-40" component="div">
        For the pagination of a large set of tabular data, you should use the{' '}
        <code>TablePagination</code> component.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TablePagination.js"
          className="my-24"
          iframe={false}
          component={require('../components/pagination/TablePagination.js').default}
          raw={require('!raw-loader!../components/pagination/TablePagination.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        :::info ⚠️ Note that the <code>Pagination</code> page prop starts at 1 to match the
        requirement of including the value in the URL, while the <code>TablePagination</code> page
        prop starts at 0 to match the requirement of zero-based JavaScript arrays that comes with
        rendering a lot of tabular data. :::
      </Typography>
      <Typography className="mb-40" component="div">
        You can learn more about this use case in the{' '}
        <a href="/material-ui/react-table/#custom-pagination-options">table section</a> of the
        documentation.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        ARIA
      </Typography>
      <Typography className="mb-40" component="div">
        The root node has a role of &quot;navigation&quot; and aria-label &quot;pagination
        navigation&quot; by default. The page items have an aria-label that identifies the purpose
        of the item (&quot;go to first page&quot;, &quot;go to previous page&quot;, &quot;go to page
        1&quot; etc.). You can override these using the <code>getItemAriaLabel</code> prop.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Keyboard
      </Typography>
      <Typography className="mb-40" component="div">
        The pagination items are in tab order, with a tabindex of &quot;0&quot;.
      </Typography>
    </>
  );
}

export default PaginationDoc;
