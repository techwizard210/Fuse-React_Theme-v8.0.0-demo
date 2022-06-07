import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function BreadcrumbsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/breadcrumbs"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Breadcrumbs
      </Typography>
      <Typography className="description">
        Breadcrumbs consist of a list of links that help a user visualize a page's location within
        the hierarchical structure of a website, and allow navigation up to any of its "ancestors".
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic breadcrumbs
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicBreadcrumbs.js"
          className="my-24"
          iframe={false}
          component={require('../components/breadcrumbs/BasicBreadcrumbs.js').default}
          raw={require('!raw-loader!../components/breadcrumbs/BasicBreadcrumbs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Active last breadcrumb
      </Typography>
      <Typography className="mb-40" component="div">
        Keep the last breadcrumb interactive.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ActiveLastBreadcrumb.js"
          className="my-24"
          iframe={false}
          component={require('../components/breadcrumbs/ActiveLastBreadcrumb.js').default}
          raw={require('!raw-loader!../components/breadcrumbs/ActiveLastBreadcrumb.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Custom separator
      </Typography>
      <Typography className="mb-40" component="div">
        In the following examples, we are using two string separators and an SVG icon.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomSeparator.js"
          className="my-24"
          iframe={false}
          component={require('../components/breadcrumbs/CustomSeparator.js').default}
          raw={require('!raw-loader!../components/breadcrumbs/CustomSeparator.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Breadcrumbs with icons
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconBreadcrumbs.js"
          className="my-24"
          iframe={false}
          component={require('../components/breadcrumbs/IconBreadcrumbs.js').default}
          raw={require('!raw-loader!../components/breadcrumbs/IconBreadcrumbs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Collapsed breadcrumbs
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CollapsedBreadcrumbs.js"
          className="my-24"
          iframe={false}
          component={require('../components/breadcrumbs/CollapsedBreadcrumbs.js').default}
          raw={require('!raw-loader!../components/breadcrumbs/CollapsedBreadcrumbs.js')}
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
          name="CustomizedBreadcrumbs.js"
          className="my-24"
          iframe={false}
          component={require('../components/breadcrumbs/CustomizedBreadcrumbs.js').default}
          raw={require('!raw-loader!../components/breadcrumbs/CustomizedBreadcrumbs.js')}
        />
      </Typography>
      {/*   <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Integration with react-router
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RouterBreadcrumbs.js"
          className="my-24"
          iframe={false}
          component={require('../components/breadcrumbs/RouterBreadcrumbs.js').default}
          raw={require('!raw-loader!../components/breadcrumbs/RouterBreadcrumbs.js')}
        />
      </Typography> */}
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#breadcrumb">
          https://www.w3.org/TR/wai-aria-practices/#breadcrumb
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
        Be sure to add a <code>aria-label</code> description on the <code>Breadcrumbs</code>{' '}
        component.
      </Typography>
      <Typography className="mb-40" component="div">
        The accessibility of this component relies on:
      </Typography>
      <ul>
        <li>
          The set of links is structured using an ordered list (<code>{`<ol>`}</code> element).
        </li>
        <li>
          To prevent screen reader announcement of the visual separators between links, they are
          hidden with <code>aria-hidden</code>.
        </li>
        <li>
          A nav element labeled with <code>aria-label</code> identifies the structure as a
          breadcrumb trail and makes it a navigation landmark so that it is easy to locate.
        </li>
      </ul>
    </>
  );
}

export default BreadcrumbsDoc;
