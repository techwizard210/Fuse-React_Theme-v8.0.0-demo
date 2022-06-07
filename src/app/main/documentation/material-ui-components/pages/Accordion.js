import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function AccordionDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/accordion"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Accordion
      </Typography>
      <Typography className="description">
        The accordion component allows the user to show and hide sections of related content on a
        page.
      </Typography>

      <Typography className="mb-40" component="div">
        An accordion is a lightweight container that may either be used standalone, or be connected
        to a larger surface, such as a card.
      </Typography>
      <Typography className="mb-40" component="div">
        <strong>Note:</strong>
        Accordions are no longer documented in the{' '}
        <a href="https://material.io/">Material Design guidelines</a>, but MUI will continue to
        support them. It was formerly known as the &quot;expansion panel&quot;.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic accordion
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicAccordion.js"
          className="my-24"
          iframe={false}
          component={require('../components/accordion/BasicAccordion.js').default}
          raw={require('!raw-loader!../components/accordion/BasicAccordion.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Controlled accordion
      </Typography>
      <Typography className="mb-40" component="div">
        Extend the default behavior to create an accordion with the <code>Accordion</code>{' '}
        component.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledAccordions.js"
          className="my-24"
          iframe={false}
          component={require('../components/accordion/ControlledAccordions.js').default}
          raw={require('!raw-loader!../components/accordion/ControlledAccordions.js')}
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
          name="CustomizedAccordions.js"
          className="my-24"
          iframe={false}
          component={require('../components/accordion/CustomizedAccordions.js').default}
          raw={require('!raw-loader!../components/accordion/CustomizedAccordions.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Performance
      </Typography>
      <Typography className="mb-40" component="div">
        The content of Accordions is mounted by default even if the accordion is not expanded. This
        default behavior has server-side rendering and SEO in mind. If you render expensive
        component trees inside your accordion details or simply render many accordions it might be a
        good idea to change this default behavior by enabling the
        <code>unmountOnExit</code> in <code>TransitionProps</code>:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Accordion TransitionProps={{ unmountOnExit: true }} />
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        As with any performance optimization this is not a silver bullet. Be sure to identify
        bottlenecks first and then try out these optimization strategies.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#accordion">
          https://www.w3.org/TR/wai-aria-practices/#accordion
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
        For optimal accessibility we recommend setting <code>id</code> and{' '}
        <code>aria-controls</code> on the
        <code>AccordionSummary</code>. The <code>Accordion</code> will derive the necessary{' '}
        <code>aria-labelledby</code>
        and <code>id</code> for the content region of the accordion.
      </Typography>
    </>
  );
}

export default AccordionDoc;
