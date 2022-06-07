import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SkeletonDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/skeleton"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Skeleton
      </Typography>
      <Typography className="description">
        Display a placeholder preview of your content before the data gets loaded to reduce
        load-time frustration.
      </Typography>

      <Typography className="mb-40" component="div">
        The data for your components might not be immediately available. You can improve the
        perceived responsiveness of the page by using skeletons. It feels like things are happening
        immediately, then the information is incrementally displayed on the screen (Cf.{' '}
        <a href="https://www.lukew.com/ff/entry.asp?1797">Avoid The Spinner</a>).
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Usage
      </Typography>
      <Typography className="mb-40" component="div">
        The component is designed to be used <strong>directly in your components</strong>. For
        instance:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
{
  item ? (
    <img
      style={{
        width: 210,
        height: 118,
      
      alt={item.title}
      src={item.src}
    />
  ) : (
    <Skeleton variant="rectangular" width={210} height={118} />
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Variants
      </Typography>
      <Typography className="mb-40" component="div">
        The component supports 3 shape variants.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Variants.js"
          className="my-24"
          iframe={false}
          component={require('../components/skeleton/Variants.js').default}
          raw={require('!raw-loader!../components/skeleton/Variants.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Animations
      </Typography>
      <Typography className="mb-40" component="div">
        By default, the skeleton pulsates, but you can change the animation to a wave or disable it
        entirely.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Animations.js"
          className="my-24"
          iframe={false}
          component={require('../components/skeleton/Animations.js').default}
          raw={require('!raw-loader!../components/skeleton/Animations.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Pulsate example
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="YouTube.js"
          className="my-24"
          iframe={false}
          component={require('../components/skeleton/YouTube.js').default}
          raw={require('!raw-loader!../components/skeleton/YouTube.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Wave example
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Facebook.js"
          className="my-24"
          iframe={false}
          component={require('../components/skeleton/Facebook.js').default}
          raw={require('!raw-loader!../components/skeleton/Facebook.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Inferring dimensions
      </Typography>
      <Typography className="mb-40" component="div">
        In addition to accepting <code>width</code> and <code>height</code> props, the component can
        also infer the dimensions.
      </Typography>
      <Typography className="mb-40" component="div">
        It works well when it comes to typography as its height is set using <code>em</code> units.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Typography variant="h1">{loading ? <Skeleton /> : 'h1'}</Typography>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SkeletonTypography.js"
          className="my-24"
          iframe={false}
          component={require('../components/skeleton/SkeletonTypography.js').default}
          raw={require('!raw-loader!../components/skeleton/SkeletonTypography.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        But when it comes to other components, you may not want to repeat the width and height. In
        these instances, you can pass <code>children</code> and it will infer its width and height
        from them.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
loading ? (
  <Skeleton variant="circular">
    <Avatar />
  </Skeleton>
) : (
  <Avatar src={data.avatar} />
);
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SkeletonChildren.js"
          className="my-24"
          iframe={false}
          component={require('../components/skeleton/SkeletonChildren.js').default}
          raw={require('!raw-loader!../components/skeleton/SkeletonChildren.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Color
      </Typography>
      <Typography className="mb-40" component="div">
        The color of the component can be customized by changing its <code>background-color</code>{' '}
        CSS property. This is especially useful when on a black background (as the skeleton will
        otherwise be invisible).
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SkeletonColor.js"
          className="my-24"
          iframe={false}
          component={require('../components/skeleton/SkeletonColor.js').default}
          raw={require('!raw-loader!../components/skeleton/SkeletonColor.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        Skeleton screens provide an alternative to the traditional spinner method. Rather than
        showing an abstract widget, skeleton screens create anticipation of what is to come and
        reduce cognitive load.
      </Typography>
      <Typography className="mb-40" component="div">
        The background color of the skeleton uses the least amount of luminance to be visible in
        good conditions (good ambient light, good screen, no visual impairments).
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        ARIA
      </Typography>
      <Typography className="mb-40" component="div">
        None.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Keyboard
      </Typography>
      <Typography className="mb-40" component="div">
        The skeleton is not focusable.
      </Typography>
    </>
  );
}

export default SkeletonDoc;
