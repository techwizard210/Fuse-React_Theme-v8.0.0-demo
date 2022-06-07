import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function AvatarsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/avatars"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Avatar
      </Typography>
      <Typography className="description">
        Avatars are found throughout material design with uses in everything from tables to dialog
        menus.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Image avatars
      </Typography>
      <Typography className="mb-40" component="div">
        Image avatars can be created by passing standard <code>img</code> props <code>src</code> or{' '}
        <code>srcSet</code> to the component.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ImageAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/ImageAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/ImageAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Letter avatars
      </Typography>
      <Typography className="mb-40" component="div">
        Avatars containing simple characters can be created by passing a string as{' '}
        <code>children</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LetterAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/LetterAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/LetterAvatars.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        You can use different background colors for the avatar. The following demo generates the
        color based on the name of the person.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BackgroundLetterAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/BackgroundLetterAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/BackgroundLetterAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sizes
      </Typography>
      <Typography className="mb-40" component="div">
        You can change the size of the avatar with the <code>height</code> and <code>width</code>{' '}
        CSS properties.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SizeAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/SizeAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/SizeAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Icon avatars
      </Typography>
      <Typography className="mb-40" component="div">
        Icon avatars are created by passing an icon as <code>children</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/IconAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/IconAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Variants
      </Typography>
      <Typography className="mb-40" component="div">
        If you need square or rounded avatars, use the <code>variant</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VariantAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/VariantAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/VariantAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Fallbacks
      </Typography>
      <Typography className="mb-40" component="div">
        If there is an error loading the avatar image, the component falls back to an alternative in
        the following order:
      </Typography>
      <ul>
        <li>the provided children</li>
        <li>
          the first letter of the <code>alt</code> text
        </li>
        <li>a generic avatar icon</li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FallbackAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/FallbackAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/FallbackAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Grouped
      </Typography>
      <Typography className="mb-40" component="div">
        <code>AvatarGroup</code> renders its children as a stack. Use the <code>max</code> prop to
        limit the number of avatars.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GroupAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/GroupAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/GroupAvatars.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Total avatars
      </Typography>
      <Typography className="mb-40" component="div">
        If you need to control the total number of avatars not shown, you can use the{' '}
        <code>total</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TotalAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/TotalAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/TotalAvatars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        With badge
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BadgeAvatars.js"
          className="my-24"
          iframe={false}
          component={require('../components/avatars/BadgeAvatars.js').default}
          raw={require('!raw-loader!../components/avatars/BadgeAvatars.js')}
        />
      </Typography>
    </>
  );
}

export default AvatarsDoc;
