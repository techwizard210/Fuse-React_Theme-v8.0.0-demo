import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TabsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/tabs"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Tabs
      </Typography>
      <Typography className="description">
        Tabs make it easy to explore and switch between different views.
      </Typography>

      <Typography className="mb-40" component="div">
        Tabs organize and allow navigation between groups of content that are related and at the
        same level of hierarchy.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic tabs
      </Typography>
      <Typography className="mb-40" component="div">
        A basic example with tab panels.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/BasicTabs.js').default}
          raw={require('!raw-loader!../components/tabs/BasicTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Experimental API
      </Typography>
      <Typography className="mb-40" component="div">
        <code>@mui/lab</code> offers utility components that inject props to implement accessible
        tabs following{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#tabpanel">
          WAI-ARIA authoring practices
        </a>
        .
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LabTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/LabTabs.js').default}
          raw={require('!raw-loader!../components/tabs/LabTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Wrapped labels
      </Typography>
      <Typography className="mb-40" component="div">
        Long labels will automatically wrap on tabs. If the label is too long for the tab, it will
        overflow, and the text will not be visible.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TabsWrappedLabel.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/TabsWrappedLabel.js').default}
          raw={require('!raw-loader!../components/tabs/TabsWrappedLabel.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Colored tab
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/ColorTabs.js').default}
          raw={require('!raw-loader!../components/tabs/ColorTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Disabled tab
      </Typography>
      <Typography className="mb-40" component="div">
        A tab can be disabled by setting the <code>disabled</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DisabledTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/DisabledTabs.js').default}
          raw={require('!raw-loader!../components/tabs/DisabledTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Fixed tabs
      </Typography>
      <Typography className="mb-40" component="div">
        Fixed tabs should be used with a limited number of tabs, and when a consistent placement
        will aid muscle memory.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Full width
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>{`variant="fullWidth"`}</code> prop should be used for smaller views. This demo
        also uses{' '}
        <a href="https://github.com/oliviertassinari/react-swipeable-views">
          react-swipeable-views
        </a>{' '}
        to animate the Tab transition, and allowing tabs to be swiped on touch devices.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FullWidthTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/FullWidthTabs.js').default}
          raw={require('!raw-loader!../components/tabs/FullWidthTabs.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Centered
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>centered</code> prop should be used for larger views.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CenteredTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/CenteredTabs.js').default}
          raw={require('!raw-loader!../components/tabs/CenteredTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Scrollable tabs
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Automatic scroll buttons
      </Typography>
      <Typography className="mb-40" component="div">
        By default, left and right scroll buttons are automatically presented on desktop and hidden
        on mobile. (based on viewport width)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ScrollableTabsButtonAuto.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/ScrollableTabsButtonAuto.js').default}
          raw={require('!raw-loader!../components/tabs/ScrollableTabsButtonAuto.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Forced scroll buttons
      </Typography>
      <Typography className="mb-40" component="div">
        Left and right scroll buttons be presented (reserve space) regardless of the viewport width
        with <code>{`scrollButtons={true}`}</code> <code>allowScrollButtonsMobile</code>:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ScrollableTabsButtonForce.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/ScrollableTabsButtonForce.js').default}
          raw={require('!raw-loader!../components/tabs/ScrollableTabsButtonForce.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        If you want to make sure the buttons are always visible, you should customize the opacity.
      </Typography>

      <FuseHighlight component="pre" className="language-css">
        {` 
.MuiTabs-scrollButtons.Mui-disabled {
  opacity: 0.3;
}
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ScrollableTabsButtonVisible.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/ScrollableTabsButtonVisible.js').default}
          raw={require('!raw-loader!../components/tabs/ScrollableTabsButtonVisible.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Prevent scroll buttons
      </Typography>
      <Typography className="mb-40" component="div">
        Left and right scroll buttons are never be presented with{' '}
        <code>{`scrollButtons={false}`}</code>. All scrolling must be initiated through user agent
        scrolling mechanisms (e.g. left/right swipe, shift mouse wheel, etc.)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ScrollableTabsButtonPrevent.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/ScrollableTabsButtonPrevent.js').default}
          raw={require('!raw-loader!../components/tabs/ScrollableTabsButtonPrevent.js')}
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
          name="CustomizedTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/CustomizedTabs.js').default}
          raw={require('!raw-loader!../components/tabs/CustomizedTabs.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        🎨 If you are looking for inspiration, you can check{' '}
        <a href="https://mui-treasury.com/styles/tabs/">
          MUI Treasury&#39;s customization examples
        </a>
        .
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Vertical tabs
      </Typography>
      <Typography className="mb-40" component="div">
        To make vertical tabs instead of default horizontal ones, there is{' '}
        <code>{`orientation="vertical"`}</code>:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/VerticalTabs.js').default}
          raw={require('!raw-loader!../components/tabs/VerticalTabs.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        Note that you can restore the scrollbar with <code>visibleScrollbar</code>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Nav tabs
      </Typography>
      <Typography className="mb-40" component="div">
        By default, tabs use a <code>button</code> element, but you can provide your custom tag or
        component. Here&#39;s an example of implementing tabbed navigation:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NavTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/NavTabs.js').default}
          raw={require('!raw-loader!../components/tabs/NavTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Icon tabs
      </Typography>
      <Typography className="mb-40" component="div">
        Tab labels may be either all icons or all text.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/IconTabs.js').default}
          raw={require('!raw-loader!../components/tabs/IconTabs.js')}
        />
        <FuseExample
          name="IconLabelTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/IconLabelTabs.js').default}
          raw={require('!raw-loader!../components/tabs/IconLabelTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Icon position
      </Typography>
      <Typography className="mb-40" component="div">
        By default, the icon is positioned at the <code>top</code> of a tab. Other supported
        positions are <code>start</code>, <code>end</code>, <code>bottom</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconPositionTabs.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/IconPositionTabs.js').default}
          raw={require('!raw-loader!../components/tabs/IconPositionTabs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Third-party routing library
      </Typography>
      <Typography className="mb-40" component="div">
        One frequent use case is to perform navigation on the client only, without an HTTP
        round-trip to the server. The <code>Tab</code> component provides the <code>component</code>{' '}
        prop to handle this use case. Here is a{' '}
        <a href="/material-ui/guides/routing/#tabs">more detailed guide</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#tabpanel">
          https://www.w3.org/TR/wai-aria-practices/#tabpanel
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
        The following steps are needed in order to provide necessary information for assistive
        technologies:
      </Typography>
      <ol>
        <li>
          Label <code>Tabs</code> via <code>aria-label</code> or <code>aria-labelledby</code>.
        </li>
        <li>
          <code>Tab</code>s need to be connected to their corresponding{' '}
          <code>{`[role="tabpanel"]`}</code> by setting the correct <code>id</code>,{' '}
          <code>aria-controls</code> and <code>aria-labelledby</code>.
        </li>
      </ol>
      <Typography className="mb-40" component="div">
        An example for the current implementation can be found in the demos on this page. We&#39;ve
        also published <a href="#experimental-api">an experimental API</a> in <code>@mui/lab</code>{' '}
        that does not require extra work.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Keyboard navigation
      </Typography>
      <Typography className="mb-40" component="div">
        The components implement keyboard navigation using the &quot;manual activation&quot;
        behavior. If you want to switch to the &quot;selection automatically follows focus&quot;
        behavior you have pass <code>selectionFollowsFocus</code> to the <code>Tabs</code>{' '}
        component. The WAI-ARIA authoring practices have a detailed guide on{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#kbd_selection_follows_focus">
          how to decide when to make selection automatically follow focus
        </a>
        .
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Demo
      </Typography>
      <Typography className="mb-40" component="div">
        The following two demos only differ in their keyboard navigation behavior. Focus a tab and
        navigate with arrow keys to notice the difference, e.g.{' '}
        <kbd className="key">Arrow Left</kbd>.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
/* Tabs where selection follows focus */
<Tabs selectionFollowsFocus />
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AccessibleTabs1.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/AccessibleTabs1.js').default}
          raw={require('!raw-loader!../components/tabs/AccessibleTabs1.js')}
        />
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
/* Tabs where each tab needs to be selected manually */
<Tabs />
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AccessibleTabs2.js"
          className="my-24"
          iframe={false}
          component={require('../components/tabs/AccessibleTabs2.js').default}
          raw={require('!raw-loader!../components/tabs/AccessibleTabs2.js')}
        />
      </Typography>
    </>
  );
}

export default TabsDoc;
