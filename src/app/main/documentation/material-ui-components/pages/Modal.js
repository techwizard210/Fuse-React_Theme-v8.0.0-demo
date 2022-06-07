import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ModalDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/modal"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Modal
      </Typography>
      <Typography className="description">
        The modal component provides a solid foundation for creating dialogs, popovers, lightboxes,
        or whatever else.
      </Typography>

      <Typography className="mb-40" component="div">
        The component renders its <code>children</code> node in front of a backdrop component. The{' '}
        <code>Modal</code> offers important features:
      </Typography>
      <ul>
        <li>💄 Manages modal stacking when one-at-a-time just isn&#39;t enough.</li>
        <li>🔐 Creates a backdrop, for disabling interaction below the modal.</li>
        <li>🔐 It disables scrolling of the page content while open.</li>
        <li>
          ♿️ It properly manages focus; moving to the modal content, and keeping it there until the
          modal is closed.
        </li>
        <li>♿️ Adds the appropriate ARIA roles automatically.</li>
      </ul>
      <Typography className="mb-40" component="div">
        :::info
        <strong>Terminology note</strong>.
      </Typography>
      <Typography className="mb-40" component="div">
        The term &quot;modal&quot; is sometimes used to mean &quot;dialog&quot;, but this is a
        misnomer. A modal window describes parts of a UI. An element is considered modal if{' '}
        <a href="https://en.wikipedia.org/wiki/Modal_window">
          it blocks interaction with the rest of the application
        </a>
        . :::
      </Typography>
      <Typography className="mb-40" component="div">
        If you are creating a modal dialog, you probably want to use the{' '}
        <a href="/material-ui/react-dialog/">Dialog</a> component rather than directly using Modal.
        Modal is a lower-level construct that is leveraged by the following components:
      </Typography>
      <ul>
        <li>
          <a href="/material-ui/react-dialog/">Dialog</a>
        </li>
        <li>
          <a href="/material-ui/react-drawer/">Drawer</a>
        </li>
        <li>
          <a href="/material-ui/react-menu/">Menu</a>
        </li>
        <li>
          <a href="/material-ui/react-popover/">Popover</a>
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic modal
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicModal.js"
          className="my-24"
          iframe={false}
          component={require('../components/modal/BasicModal.js').default}
          raw={require('!raw-loader!../components/modal/BasicModal.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        Notice that you can disable the outline (often blue or gold) with the{' '}
        <code>outline: 0</code> CSS property.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Nested modal
      </Typography>
      <Typography className="mb-40" component="div">
        Modals can be nested, for example a select within a dialog, but stacking of more than two
        modals, or any two modals with a backdrop is discouraged.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NestedModal.js"
          className="my-24"
          iframe={false}
          component={require('../components/modal/NestedModal.js').default}
          raw={require('!raw-loader!../components/modal/NestedModal.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Transitions
      </Typography>
      <Typography className="mb-40" component="div">
        The open/close state of the modal can be animated with a transition component. This
        component should respect the following conditions:
      </Typography>
      <ul>
        <li>Be a direct child descendent of the modal.</li>
        <li>
          Have an <code>in</code> prop. This corresponds to the open/close state.
        </li>
        <li>
          Call the <code>onEnter</code> callback prop when the enter transition starts.
        </li>
        <li>
          Call the <code>onExited</code> callback prop when the exit transition is completed. These
          two callbacks allow the modal to unmount the child content when closed and fully
          transitioned.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        Modal has built-in support for{' '}
        <a href="https://github.com/reactjs/react-transition-group">react-transition-group</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransitionsModal.js"
          className="my-24"
          iframe={false}
          component={require('../components/modal/TransitionsModal.js').default}
          raw={require('!raw-loader!../components/modal/TransitionsModal.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        Alternatively, you can use <a href="https://github.com/pmndrs/react-spring">react-spring</a>
        .
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SpringModal.js"
          className="my-24"
          iframe={false}
          component={require('../components/modal/SpringModal.js').default}
          raw={require('!raw-loader!../components/modal/SpringModal.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Performance
      </Typography>
      <Typography className="mb-40" component="div">
        The content of modal is unmounted when closed. If you need to make the content available to
        search engines or render expensive component trees inside your modal while optimizing for
        interaction responsiveness it might be a good idea to change this default behavior by
        enabling the <code>keepMounted</code> prop:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Modal keepMounted />
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="KeepMountedModal.js"
          className="my-24"
          iframe={false}
          component={require('../components/modal/KeepMountedModal.js').default}
          raw={require('!raw-loader!../components/modal/KeepMountedModal.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        As with any performance optimization, this is not a silver bullet. Be sure to identify
        bottlenecks first, and then try out these optimization strategies.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Server-side modal
      </Typography>
      <Typography className="mb-40" component="div">
        React <a href="https://github.com/facebook/react/issues/13097">doesn&#39;t support</a> the{' '}
        <a href="https://reactjs.org/docs/portals.html">
          <code>createPortal()</code>
        </a>{' '}
        API on the server. In order to display the modal, you need to disable the portal feature
        with the <code>disablePortal</code> prop:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ServerModal.js"
          className="my-24"
          iframe={false}
          component={require('../components/modal/ServerModal.js').default}
          raw={require('!raw-loader!../components/modal/ServerModal.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Limitations
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Focus trap
      </Typography>
      <Typography className="mb-40" component="div">
        The modal moves the focus back to the body of the component if the focus tries to escape it.
      </Typography>
      <Typography className="mb-40" component="div">
        This is done for accessibility purposes. However, it might create issues. In the event the
        users need to interact with another part of the page, e.g. with a chatbot window, you can
        disable the behavior:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Modal disableEnforceFocus />
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#dialog_modal">
          https://www.w3.org/TR/wai-aria-practices/#dialog_modal
        </a>
        )
      </Typography>
      <ul>
        <li>
          <Typography className="mb-40" component="div">
            Be sure to add <code>{`aria-labelledby="id..."`}</code>, referencing the modal title, to
            the <code>Modal</code>. Additionally, you may give a description of your modal with the{' '}
            <code>{`aria-describedby="id..."`}</code> prop on the <code>Modal</code>.
          </Typography>

          <FuseHighlight component="pre" className="language-jsx">
            {` 
<Modal aria-labelledby="modal-title" aria-describedby="modal-description">
  <h2 id="modal-title">My Title</h2>
  <Typography id="modal-description">My Description</Typography>
</Modal>
`}
          </FuseHighlight>
        </li>
        <li>
          <Typography className="mb-40" component="div">
            The{' '}
            <a href="https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html">
              WAI-ARIA authoring practices
            </a>{' '}
            can help you set the initial focus on the most relevant element, based on your modal
            content.
          </Typography>
        </li>
        <li>
          <Typography className="mb-40" component="div">
            Keep in mind that a &quot;modal window&quot; overlays on either the primary window or
            another modal window. Windows under a modal are <strong>inert</strong>. That is, users
            cannot interact with content outside an active modal window. This might create{' '}
            <a href="#focus-trap">conflicting behaviors</a>.
          </Typography>
        </li>
      </ul>
    </>
  );
}

export default ModalDoc;
