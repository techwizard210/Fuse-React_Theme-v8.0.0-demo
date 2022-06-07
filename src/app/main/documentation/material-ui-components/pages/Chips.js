import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ChipsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/chips"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Chip
      </Typography>
      <Typography className="description">
        Chips are compact elements that represent an input, attribute, or action.
      </Typography>

      <Typography className="mb-40" component="div">
        Chips allow users to enter information, make selections, filter content, or trigger actions.
      </Typography>
      <Typography className="mb-40" component="div">
        While included here as a standalone component, the most common use will be in some form of
        input, so some of the behavior demonstrated here is not shown in context.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic chip
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>Chip</code> component supports outlined and filled styling.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/BasicChips.js').default}
          raw={require('!raw-loader!../components/chips/BasicChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Chip actions
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the following actions.
      </Typography>
      <ul>
        <li>
          Chips with the <code>onClick</code> prop defined change appearance on focus, hover, and
          click.
        </li>
        <li>
          Chips with the <code>onDelete</code> prop defined will display a delete icon which changes
          appearance on hover.
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Clickable
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ClickableChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/ClickableChips.js').default}
          raw={require('!raw-loader!../components/chips/ClickableChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Deletable
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DeletableChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/DeletableChips.js').default}
          raw={require('!raw-loader!../components/chips/DeletableChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Clickable and deletable
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ClickableAndDeletableChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/ClickableAndDeletableChips.js').default}
          raw={require('!raw-loader!../components/chips/ClickableAndDeletableChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Clickable link
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ClickableLinkChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/ClickableLinkChips.js').default}
          raw={require('!raw-loader!../components/chips/ClickableLinkChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Custom delete icon
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomDeleteIconChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/CustomDeleteIconChips.js').default}
          raw={require('!raw-loader!../components/chips/CustomDeleteIconChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Chip adornments
      </Typography>
      <Typography className="mb-40" component="div">
        You can add ornaments to the beginning of the component.
      </Typography>
      <Typography className="mb-40" component="div">
        Use the <code>avatar</code> prop to add an avatar or use the <code>icon</code> prop to add
        an icon.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Avatar chip
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AvatarChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/AvatarChips.js').default}
          raw={require('!raw-loader!../components/chips/AvatarChips.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Icon chip
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/IconChips.js').default}
          raw={require('!raw-loader!../components/chips/IconChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Color chip
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the <code>color</code> prop to define a color from theme palette.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/ColorChips.js').default}
          raw={require('!raw-loader!../components/chips/ColorChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sizes chip
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the <code>size</code> prop to define a small Chip.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SizesChips.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/SizesChips.js').default}
          raw={require('!raw-loader!../components/chips/SizesChips.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Chip array
      </Typography>
      <Typography className="mb-40" component="div">
        An example of rendering multiple chips from an array of values. Deleting a chip removes it
        from the array. Note that since no
        <code>onClick</code> prop is defined, the <code>Chip</code> can be focused, but does not
        gain depth while clicked or touched.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ChipsArray.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/ChipsArray.js').default}
          raw={require('!raw-loader!../components/chips/ChipsArray.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Chip playground
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ChipsPlayground.js"
          className="my-24"
          iframe={false}
          component={require('../components/chips/ChipsPlayground.js').default}
          raw={require('!raw-loader!../components/chips/ChipsPlayground.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        If the Chip is deletable or clickable then it is a button in tab order. When the Chip is
        focused (e.g. when tabbing) releasing (<code>keyup</code> event) <code>Backspace</code> or{' '}
        <code>Delete</code> will call the <code>onDelete</code> handler while releasing{' '}
        <code>Escape</code> will blur the Chip.
      </Typography>
    </>
  );
}

export default ChipsDoc;
