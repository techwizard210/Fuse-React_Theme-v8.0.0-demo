import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ImageListDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/image-list"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Image list
      </Typography>
      <Typography className="description">
        Image lists display a collection of images in an organized grid.
      </Typography>

      <Typography className="mb-40" component="div">
        Image lists represent a collection of items in a repeated pattern. They help improve the
        visual comprehension of the content they hold.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Standard image list
      </Typography>
      <Typography className="mb-40" component="div">
        Standard image lists are best for items of equal importance. They have a uniform container
        size, ratio, and spacing.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="StandardImageList.js"
          className="my-24"
          iframe={false}
          component={require('../components/image-list/StandardImageList.js').default}
          raw={require('!raw-loader!../components/image-list/StandardImageList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Quilted image list
      </Typography>
      <Typography className="mb-40" component="div">
        Quilted image lists emphasize certain items over others in a collection. They create
        hierarchy using varied container sizes and ratios.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="QuiltedImageList.js"
          className="my-24"
          iframe={false}
          component={require('../components/image-list/QuiltedImageList.js').default}
          raw={require('!raw-loader!../components/image-list/QuiltedImageList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Woven image list
      </Typography>
      <Typography className="mb-40" component="div">
        Woven image lists use alternating container ratios to create a rhythmic layout. A woven
        image list is best for browsing peer content.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="WovenImageList.js"
          className="my-24"
          iframe={false}
          component={require('../components/image-list/WovenImageList.js').default}
          raw={require('!raw-loader!../components/image-list/WovenImageList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Masonry image list
      </Typography>
      <Typography className="mb-40" component="div">
        Masonry image lists use dynamically sized container heights that reflect the aspect ratio of
        each image. This image list is best used for browsing uncropped peer content.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MasonryImageList.js"
          className="my-24"
          iframe={false}
          component={require('../components/image-list/MasonryImageList.js').default}
          raw={require('!raw-loader!../components/image-list/MasonryImageList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Image list with title bars
      </Typography>
      <Typography className="mb-40" component="div">
        This example demonstrates the use of the <code>ImageListItemBar</code> to add an overlay to
        each item. The overlay can accommodate a <code>title</code>, <code>subtitle</code> and
        secondary action - in this example an <code>IconButton</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TitlebarImageList.js"
          className="my-24"
          iframe={false}
          component={require('../components/image-list/TitlebarImageList.js').default}
          raw={require('!raw-loader!../components/image-list/TitlebarImageList.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Title bar below image (standard)
      </Typography>
      <Typography className="mb-40" component="div">
        The title bar can be placed below the image.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TitlebarBelowImageList.js"
          className="my-24"
          iframe={false}
          component={require('../components/image-list/TitlebarBelowImageList.js').default}
          raw={require('!raw-loader!../components/image-list/TitlebarBelowImageList.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Title bar below image (masonry)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TitlebarBelowMasonryImageList.js"
          className="my-24"
          iframe={false}
          component={require('../components/image-list/TitlebarBelowMasonryImageList.js').default}
          raw={require('!raw-loader!../components/image-list/TitlebarBelowMasonryImageList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Custom image list
      </Typography>
      <Typography className="mb-40" component="div">
        In this example the items have a customized titlebar, positioned at the top and with a
        custom gradient <code>titleBackground</code>. The secondary action <code>IconButton</code>{' '}
        is positioned on the left. The <code>gap</code> prop is used to adjust the gap between
        items.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomImageList.js"
          className="my-24"
          iframe={false}
          component={require('../components/image-list/CustomImageList.js').default}
          raw={require('!raw-loader!../components/image-list/CustomImageList.js')}
        />
      </Typography>
    </>
  );
}

export default ImageListDoc;
