import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function GridDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/grid"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Grid
      </Typography>
      <Typography className="description">
        The Material Design responsive layout grid adapts to screen size and orientation, ensuring
        consistency across layouts.
      </Typography>

      <Typography className="mb-40" component="div">
        The <a href="https://material.io/design/layout/responsive-layout-grid.html">grid</a> creates
        visual consistency between layouts while allowing flexibility across a wide variety of
        designs. Material Design&#39;s responsive UI is based on a 12-column grid layout.
      </Typography>
      <Typography className="mb-40" component="div">
        :::warning ⚠️ The <code>Grid</code> component shouldn&#39;t be confused with a data grid; it
        is closer to a layout grid. For a data grid head to{' '}
        <a href="/x/react-data-grid/">
          the <code>DataGrid</code> component
        </a>
        . :::
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        How it works
      </Typography>
      <Typography className="mb-40" component="div">
        The grid system is implemented with the <code>Grid</code> component:
      </Typography>
      <ul>
        <li>
          It uses <a href="https://www.w3.org/TR/css-flexbox-1/">CSS&#39;s Flexible Box module</a>{' '}
          for high flexibility.
        </li>
        <li>
          There are two types of layout: <em>containers</em> and <em>items</em>.
        </li>
        <li>
          Item widths are set in percentages, so they&#39;re always fluid and sized relative to
          their parent element.
        </li>
        <li>Items have padding to create the spacing between individual items.</li>
        <li>There are five grid breakpoints: xs, sm, md, lg, and xl.</li>
        <li>
          Integer values can be given to each breakpoint, indicating how many of the 12 available
          columns are occupied by the component when the viewport width satisfies the{' '}
          <a href="/material-ui/customization/breakpoints/#default-breakpoints">
            breakpoint constraints
          </a>
          .
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        If you are <strong>new to or unfamiliar with flexbox</strong>, we encourage you to read this{' '}
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS-Tricks flexbox</a>{' '}
        guide.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Fluid grids
      </Typography>
      <Typography className="mb-40" component="div">
        Fluid grids use columns that scale and resize content. A fluid grid&#39;s layout can use
        breakpoints to determine if the layout needs to change dramatically.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Basic grid
      </Typography>
      <Typography className="mb-40" component="div">
        Column widths are integer values between 1 and 12; they apply at any breakpoint and indicate
        how many columns are occupied by the component.
      </Typography>
      <Typography className="mb-40" component="div">
        A value given to a breakpoint applies to all the other breakpoints wider than it (unless
        overridden, as you can read later in this page). For example, <code>{`xs={12}`}</code> sizes
        a component to occupy the whole viewport width regardless of its size.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/BasicGrid.js').default}
          raw={require('!raw-loader!../components/grid/BasicGrid.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Grid with multiple breakpoints
      </Typography>
      <Typography className="mb-40" component="div">
        Components may have multiple widths defined, causing the layout to change at the defined
        breakpoint. Width values given to larger breakpoints override those given to smaller
        breakpoints.
      </Typography>
      <Typography className="mb-40" component="div">
        For example, <code>{`xs={12} sm={6}`}</code> sizes a component to occupy half of the
        viewport width (6 columns) when viewport width is{' '}
        <a href="/material-ui/customization/breakpoints/#default-breakpoints">600 or more pixels</a>
        . For smaller viewports, the component fills all 12 available columns.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FullWidthGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/FullWidthGrid.js').default}
          raw={require('!raw-loader!../components/grid/FullWidthGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Spacing
      </Typography>
      <Typography className="mb-40" component="div">
        To control space between children, use the <code>spacing</code> prop. The spacing value can
        be any positive number, including decimals and any string. The prop is converted into a CSS
        property using the{' '}
        <a href="/material-ui/customization/spacing/">
          <code>theme.spacing()</code>
        </a>{' '}
        helper.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SpacingGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/SpacingGrid.js').default}
          raw={require('!raw-loader!../components/grid/SpacingGrid.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Row &amp; column spacing
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>rowSpacing</code> and <code>columnSpacing</code> props allow for specifying the
        row and column gaps independently. It&#39;s similar to the <code>row-gap</code> and{' '}
        <code>column-gap</code> properties of{' '}
        <a href="/system/grid/#row-gap-amp-column-gap">CSS Grid</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RowAndColumnSpacing.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/RowAndColumnSpacing.js').default}
          raw={require('!raw-loader!../components/grid/RowAndColumnSpacing.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Responsive values
      </Typography>
      <Typography className="mb-40" component="div">
        You can switch the props&#39; value based on the active breakpoint. For instance, we can
        implement the{' '}
        <a href="https://material.io/design/layout/responsive-layout-grid.html">
          &quot;recommended&quot;
        </a>{' '}
        responsive layout grid of Material Design.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/ResponsiveGrid.js').default}
          raw={require('!raw-loader!../components/grid/ResponsiveGrid.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        Responsive values is supported by:
      </Typography>
      <ul>
        <li>
          <code>columns</code>
        </li>
        <li>
          <code>columnSpacing</code>
        </li>
        <li>
          <code>direction</code>
        </li>
        <li>
          <code>rowSpacing</code>
        </li>
        <li>
          <code>spacing</code>
        </li>
        <li>
          all the <a href="#system-props">other props</a> of the system
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        :::warning ⚠️ When using a responsive <code>columns</code> prop, each grid item needs its
        corresponding breakpoint. For instance, this is not working. The grid item misses the value
        for <code>md</code>:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Grid container columns={{ xs: 4, md: 12 }}>
  <Grid item xs={2} />
</Grid>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        :::
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Interactive
      </Typography>
      <Typography className="mb-40" component="div">
        Below is an interactive demo that lets you explore the visual results of the different
        settings:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="InteractiveGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/InteractiveGrid.js').default}
          raw={require('!raw-loader!../components/grid/InteractiveGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Auto-layout
      </Typography>
      <Typography className="mb-40" component="div">
        The Auto-layout makes the <em>items</em> equitably share the available space. That also
        means you can set the width of one <em>item</em> and the others will automatically resize
        around it.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AutoGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/AutoGrid.js').default}
          raw={require('!raw-loader!../components/grid/AutoGrid.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Variable width content
      </Typography>
      <Typography className="mb-40" component="div">
        Set one of the size breakpoint props to <code>{`"auto"`}</code> instead of <code>true</code>{' '}
        / a <code>number</code> to size a column based on the natural width of its content.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VariableWidthGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/VariableWidthGrid.js').default}
          raw={require('!raw-loader!../components/grid/VariableWidthGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Complex Grid
      </Typography>
      <Typography className="mb-40" component="div">
        The following demo doesn&#39;t follow the Material Design guidelines, but illustrates how
        the grid can be used to build complex layouts.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ComplexGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/ComplexGrid.js').default}
          raw={require('!raw-loader!../components/grid/ComplexGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Nested Grid
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>container</code> and <code>item</code> props are two independent booleans; they
        can be combined to allow a Grid component to be both a flex container and child.
      </Typography>
      <Typography className="mb-40" component="div">
        :::info A flex <strong>container</strong> is the box generated by an element with a computed
        display of <code>flex</code> or <code>inline-flex</code>. In-flow children of a flex
        container are called flex <strong>items</strong> and are laid out using the flex layout
        model. :::
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="https://www.w3.org/TR/css-flexbox-1/#box-model">
          https://www.w3.org/TR/css-flexbox-1/#box-model
        </a>
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NestedGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/NestedGrid.js').default}
          raw={require('!raw-loader!../components/grid/NestedGrid.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        ⚠️ Defining an explicit width to a Grid element that is flex container, flex item, and has
        spacing at the same time lead to unexpected behavior, avoid doing it:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Grid spacing={1} container item xs={12}>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        If you need to do such, remove one of the props.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Columns
      </Typography>
      <Typography className="mb-40" component="div">
        You can change the default number of columns (12) with the <code>columns</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColumnsGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/ColumnsGrid.js').default}
          raw={require('!raw-loader!../components/grid/ColumnsGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Limitations
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Negative margin
      </Typography>
      <Typography className="mb-40" component="div">
        The spacing between items is implemented with a negative margin. This might lead to
        unexpected behaviors. For instance, to apply a background color, you need to apply{' '}
        <code>display: flex;</code> to the parent.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        white-space: nowrap
      </Typography>
      <Typography className="mb-40" component="div">
        The initial setting on flex items is <code>min-width: auto</code>. It&#39;s causing a
        positioning conflict when the children is using <code>white-space: nowrap;</code>. You can
        experience the issue with:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Grid item xs>
  <Typography noWrap>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        In order for the item to stay within the container you need to set <code>min-width: 0</code>
        . In practice, you can set the <code>zeroMinWidth</code> prop:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Grid item xs zeroMinWidth>
  <Typography noWrap>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AutoGridNoWrap.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/AutoGridNoWrap.js').default}
          raw={require('!raw-loader!../components/grid/AutoGridNoWrap.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        direction: column | column-reverse
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>{' '}
        props are <strong>not supported</strong> within <code>{`direction="column"`}</code> and{' '}
        <code>{`direction="column-reverse"`}</code> containers.
      </Typography>
      <Typography className="mb-40" component="div">
        They define the number of grids the component will use for a given breakpoint. They are
        intended to control <strong>width</strong> using <code>flex-basis</code> in <code>row</code>{' '}
        containers but they will impact height in <code>column</code> containers. If used, these
        props may have undesirable effects on the height of the <code>Grid</code> item elements.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        CSS Grid Layout
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>Grid</code> component is using CSS flexbox internally. But as seen below, you can
        easily use <a href="/system/grid/">the system</a> and CSS Grid to layout your pages.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CSSGrid.js"
          className="my-24"
          iframe={false}
          component={require('../components/grid/CSSGrid.js').default}
          raw={require('!raw-loader!../components/grid/CSSGrid.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        System props
      </Typography>
      <Typography className="mb-40" component="div">
        As a CSS utility component, the <code>Grid</code> supports all{' '}
        <a href="/system/properties/">
          <code>system</code>
        </a>{' '}
        properties. You can use them as props directly on the component. For instance, a padding:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Grid item p={2}>
`}
      </FuseHighlight>
    </>
  );
}

export default GridDoc;
