import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SliderDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/slider"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Slider
      </Typography>
      <Typography className="description">
        Sliders allow users to make selections from a range of values.
      </Typography>

      <Typography className="mb-40" component="div">
        Sliders reflect a range of values along a bar, from which users may select a single value.
        They are ideal for adjusting settings such as volume, brightness, or applying image filters.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Continuous sliders
      </Typography>
      <Typography className="mb-40" component="div">
        Continuous sliders allow users to select a value along a subjective range.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ContinuousSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/ContinuousSlider.js').default}
          raw={require('!raw-loader!../components/slider/ContinuousSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sizes
      </Typography>
      <Typography className="mb-40" component="div">
        For smaller slider, use the prop <code>{`size="small"`}</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SliderSizes.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/SliderSizes.js').default}
          raw={require('!raw-loader!../components/slider/SliderSizes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Discrete sliders
      </Typography>
      <Typography className="mb-40" component="div">
        Discrete sliders can be adjusted to a specific value by referencing its value indicator. You
        can generate a mark for each step with <code>{`marks={true}`}</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DiscreteSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/DiscreteSlider.js').default}
          raw={require('!raw-loader!../components/slider/DiscreteSlider.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Small steps
      </Typography>
      <Typography className="mb-40" component="div">
        You can change the default step increment.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DiscreteSliderSteps.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/DiscreteSliderSteps.js').default}
          raw={require('!raw-loader!../components/slider/DiscreteSliderSteps.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Custom marks
      </Typography>
      <Typography className="mb-40" component="div">
        You can have custom marks by providing a rich array to the <code>marks</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DiscreteSliderMarks.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/DiscreteSliderMarks.js').default}
          raw={require('!raw-loader!../components/slider/DiscreteSliderMarks.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Restricted values
      </Typography>
      <Typography className="mb-40" component="div">
        You can restrict the selectable values to those provided with the <code>marks</code> prop
        with <code>{`step={null}`}</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DiscreteSliderValues.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/DiscreteSliderValues.js').default}
          raw={require('!raw-loader!../components/slider/DiscreteSliderValues.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Label always visible
      </Typography>
      <Typography className="mb-40" component="div">
        You can force the thumb label to be always visible with{' '}
        <code>{`valueLabelDisplay="on"`}</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DiscreteSliderLabel.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/DiscreteSliderLabel.js').default}
          raw={require('!raw-loader!../components/slider/DiscreteSliderLabel.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Range slider
      </Typography>
      <Typography className="mb-40" component="div">
        The slider can be used to set the start and end of a range by supplying an array of values
        to the <code>value</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RangeSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/RangeSlider.js').default}
          raw={require('!raw-loader!../components/slider/RangeSlider.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Minimum distance
      </Typography>
      <Typography className="mb-40" component="div">
        You can enforce a minimum distance between values in the <code>onChange</code> event
        handler. By default, when you move the pointer over a thumb while dragging another thumb,
        the active thumb will swap to the hovered thumb. You can disable this behavior with the{' '}
        <code>disableSwap</code> prop. If you want the range to shift when reaching minimum
        distance, you can utilize the <code>activeThumb</code> parameter in <code>onChange</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MinimumDistanceSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/MinimumDistanceSlider.js').default}
          raw={require('!raw-loader!../components/slider/MinimumDistanceSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Slider with input field
      </Typography>
      <Typography className="mb-40" component="div">
        In this example, an input allows a discrete value to be set.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="InputSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/InputSlider.js').default}
          raw={require('!raw-loader!../components/slider/InputSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Color
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/ColorSlider.js').default}
          raw={require('!raw-loader!../components/slider/ColorSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Customization
      </Typography>
      <Typography className="mb-40" component="div">
        Here are some examples of customizing the component. You can learn more about this in the{' '}
        <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/CustomizedSlider.js').default}
          raw={require('!raw-loader!../components/slider/CustomizedSlider.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Music player
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MusicPlayerSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/MusicPlayerSlider.js').default}
          raw={require('!raw-loader!../components/slider/MusicPlayerSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Vertical sliders
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/VerticalSlider.js').default}
          raw={require('!raw-loader!../components/slider/VerticalSlider.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        <strong>WARNING</strong>: Chrome, Safari and newer Edge versions i.e. any browser based on
        WebKit exposes <code>{`<Slider orientation="vertical" />`}</code> as horizontal (
        <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1158217">
          chromium issue #1158217
        </a>
        ). By applying <code>-webkit-appearance: slider-vertical;</code> the slider is exposed as
        vertical.
      </Typography>
      <Typography className="mb-40" component="div">
        However, by applying <code>-webkit-appearance: slider-vertical;</code> keyboard navigation
        for horizontal keys (<kbd className="key">Arrow Left</kbd>,{' '}
        <kbd className="key">Arrow Right</kbd>) is reversed (
        <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1162640">
          chromium issue #1162640
        </a>
        ). Usually, up and right should increase and left and down should decrease the value. If you
        apply <code>-webkit-appearance</code> you could prevent keyboard navigation for horizontal
        arrow keys for a truly vertical slider. This might be less confusing to users compared to a
        change in direction.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalAccessibleSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/VerticalAccessibleSlider.js').default}
          raw={require('!raw-loader!../components/slider/VerticalAccessibleSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Track
      </Typography>
      <Typography className="mb-40" component="div">
        The track shows the range available for user selection.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Removed track
      </Typography>
      <Typography className="mb-40" component="div">
        The track can be turned off with <code>{`track={false}`}</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TrackFalseSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/TrackFalseSlider.js').default}
          raw={require('!raw-loader!../components/slider/TrackFalseSlider.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Inverted track
      </Typography>
      <Typography className="mb-40" component="div">
        The track can be inverted with <code>{`track="inverted"`}</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TrackInvertedSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/TrackInvertedSlider.js').default}
          raw={require('!raw-loader!../components/slider/TrackInvertedSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Non-linear scale
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the <code>scale</code> prop to represent the <code>value</code> on a different
        scale.
      </Typography>
      <Typography className="mb-40" component="div">
        In the following demo, the value <em>x</em> represents the value <em>2^x</em>. Increasing{' '}
        <em>x</em> by one increases the represented value by factor <em>2</em>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NonLinearSlider.js"
          className="my-24"
          iframe={false}
          component={require('../components/slider/NonLinearSlider.js').default}
          raw={require('!raw-loader!../components/slider/NonLinearSlider.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#slider">
          https://www.w3.org/TR/wai-aria-practices/#slider
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
        The component handles most of the work necessary to make it accessible. However, you need to
        make sure that:
      </Typography>
      <ul>
        <li>
          Each thumb has a user-friendly label (<code>aria-label</code>,{' '}
          <code>aria-labelledby</code> or <code>getAriaLabel</code> prop).
        </li>
        <li>
          Each thumb has a user-friendly text for its current value. This is not required if the
          value matches the semantics of the label. You can change the name with the{' '}
          <code>getAriaValueText</code> or <code>aria-valuetext</code> prop.
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Limitations
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        IE 11
      </Typography>
      <Typography className="mb-40" component="div">
        The slider&#39;s value label is not centered in IE 11. The alignement is not handled to make
        customizations easier with the lastest browsers. You can solve the issue with:
      </Typography>

      <FuseHighlight component="pre" className="language-css">
        {` 
.MuiSlider-valueLabel {
  left: calc(-50% - 4px);
}
`}
      </FuseHighlight>
    </>
  );
}

export default SliderDoc;
