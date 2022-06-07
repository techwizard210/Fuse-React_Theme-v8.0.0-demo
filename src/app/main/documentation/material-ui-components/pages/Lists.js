import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ListsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/lists"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Lists
      </Typography>
      <Typography className="description">
        Lists are continuous, vertical indexes of text or images.
      </Typography>

      <Typography className="mb-40" component="div">
        Lists are a continuous group of text or images. They are composed of items containing
        primary and supplemental actions, which are represented by icons and text.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic List
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/BasicList.js').default}
          raw={require('!raw-loader!../components/lists/BasicList.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        The last item of the previous demo shows how you can render a link:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="Spam" />
</ListItemButton>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        You can find a{' '}
        <a href="/material-ui/guides/routing/#list">
          demo with React Router following this section
        </a>{' '}
        of the documentation.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Nested List
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NestedList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/NestedList.js').default}
          raw={require('!raw-loader!../components/lists/NestedList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Folder List
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FolderList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/FolderList.js').default}
          raw={require('!raw-loader!../components/lists/FolderList.js')}
        />
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
          name="InteractiveList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/InteractiveList.js').default}
          raw={require('!raw-loader!../components/lists/InteractiveList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Selected ListItem
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectedListItem.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/SelectedListItem.js').default}
          raw={require('!raw-loader!../components/lists/SelectedListItem.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Align list items
      </Typography>
      <Typography className="mb-40" component="div">
        When displaying three lines or more, the avatar is not aligned at the top. You should set
        the <code>{`alignItems="flex-start"`}</code> prop to align the avatar at the top, following
        the Material Design guidelines:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AlignItemsList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/AlignItemsList.js').default}
          raw={require('!raw-loader!../components/lists/AlignItemsList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        List Controls
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Checkbox
      </Typography>
      <Typography className="mb-40" component="div">
        A checkbox can either be a primary action or a secondary action.
      </Typography>
      <Typography className="mb-40" component="div">
        The checkbox is the primary action and the state indicator for the list item. The comment
        button is a secondary action and a separate target.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CheckboxList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/CheckboxList.js').default}
          raw={require('!raw-loader!../components/lists/CheckboxList.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        The checkbox is the secondary action for the list item and a separate target.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CheckboxListSecondary.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/CheckboxListSecondary.js').default}
          raw={require('!raw-loader!../components/lists/CheckboxListSecondary.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Switch
      </Typography>
      <Typography className="mb-40" component="div">
        The switch is the secondary action and a separate target.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SwitchListSecondary.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/SwitchListSecondary.js').default}
          raw={require('!raw-loader!../components/lists/SwitchListSecondary.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sticky subheader
      </Typography>
      <Typography className="mb-40" component="div">
        Upon scrolling, subheaders remain pinned to the top of the screen until pushed off screen by
        the next subheader. This feature relies on CSS sticky positioning. (⚠️ no IE 11 support)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PinnedSubheaderList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/PinnedSubheaderList.js').default}
          raw={require('!raw-loader!../components/lists/PinnedSubheaderList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Inset List Item
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>inset</code> prop enables a list item that does not have a leading icon or avatar
        to align correctly with items that do.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="InsetList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/InsetList.js').default}
          raw={require('!raw-loader!../components/lists/InsetList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Gutterless list
      </Typography>
      <Typography className="mb-40" component="div">
        When rendering a list within a component that defines its own gutters, <code>ListItem</code>{' '}
        gutters can be disabled with <code>disableGutters</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GutterlessList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/GutterlessList.js').default}
          raw={require('!raw-loader!../components/lists/GutterlessList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Virtualized List
      </Typography>
      <Typography className="mb-40" component="div">
        In the following example, we demonstrate how to use{' '}
        <a href="https://github.com/bvaughn/react-window">react-window</a> with the{' '}
        <code>List</code> component. It renders 200 rows and can easily handle more. Virtualization
        helps with performance issues.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VirtualizedList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/VirtualizedList.js').default}
          raw={require('!raw-loader!../components/lists/VirtualizedList.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        The use of <a href="https://github.com/bvaughn/react-window">react-window</a> when possible
        is encouraged. If this library doesn&#39;t cover your use case, you should consider using{' '}
        <a href="https://github.com/bvaughn/react-virtualized">react-virtualized</a>, then
        alternatives like <a href="https://github.com/petyosi/react-virtuoso">react-virtuoso</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Customization
      </Typography>
      <Typography className="mb-40" component="div">
        Here are some examples of customizing the component. You can learn more about this in the
        <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedList.js"
          className="my-24"
          iframe={false}
          component={require('../components/lists/CustomizedList.js').default}
          raw={require('!raw-loader!../components/lists/CustomizedList.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        🎨 If you are looking for inspiration, you can check{' '}
        <a href="https://mui-treasury.com/styles/list-item/">
          MUI Treasury&#39;s customization examples
        </a>
        .
      </Typography>
    </>
  );
}

export default ListsDoc;
