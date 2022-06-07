import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function LinksDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/links"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Links
      </Typography>
      <Typography className="description">
        The Link component allows you to easily customize anchor elements with your theme colors and
        typography styles.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic links
      </Typography>
      <Typography className="mb-40" component="div">
        The Link component is built on top of the{' '}
        <a href="/material-ui/api/typography/">Typography</a> component, meaning that you can use
        its props.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Links.js"
          className="my-24"
          iframe={false}
          component={require('../components/links/Links.js').default}
          raw={require('!raw-loader!../components/links/Links.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        However, the Link component has some different default props than the Typography component:
      </Typography>
      <ul>
        <li>
          <code>{`color="primary"`}</code> as the link needs to stand out.
        </li>
        <li>
          <code>{`variant="inherit"`}</code> as the link will, most of the time, be used as a child
          of a Typography component.
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Underline
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>underline</code> prop can be used to set the underline behavior. The default is{' '}
        <code>always</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnderlineLink.js"
          className="my-24"
          iframe={false}
          component={require('../components/links/UnderlineLink.js').default}
          raw={require('!raw-loader!../components/links/UnderlineLink.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Security
      </Typography>
      <Typography className="mb-40" component="div">
        When you use <code>{`target="_blank"`}</code> with Links, it is{' '}
        <a href="https://developers.google.com/web/tools/lighthouse/audits/noopener">recommended</a>{' '}
        to always set <code>{`rel="noopener"`}</code> or <code>{`rel="noreferrer"`}</code> when
        linking to third party content.
      </Typography>
      <ul>
        <li>
          <code>{`rel="noopener"`}</code> prevents the new page from being able to access the{' '}
          <code>window.opener</code> property and ensures it runs in a separate process. Without
          this, the target page can potentially redirect your page to a malicious URL.
        </li>
        <li>
          <code>{`rel="noreferrer"`}</code> has the same effect, but also prevents the{' '}
          <em>Referer</em> header from being sent to the new page. ⚠️ Removing the referrer header
          will affect analytics.
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Third-party routing library
      </Typography>
      <Typography className="mb-40" component="div">
        One frequent use case is to perform navigation on the client only, without an HTTP
        round-trip to the server. The <code>Link</code> component provides the{' '}
        <code>component</code> prop to handle this use case. Here is a{' '}
        <a href="/material-ui/guides/routing/#link">more detailed guide</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#link">
          https://www.w3.org/TR/wai-aria-practices/#link
        </a>
        )
      </Typography>
      <ul>
        <li>
          When providing the content for the link, avoid generic descriptions like &quot;click
          here&quot; or &quot;go to&quot;. Instead, use{' '}
          <a href="https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text">
            specific descriptions
          </a>
          .
        </li>
        <li>
          For the best user experience, links should stand out from the text on the page. For
          instance, you can keep the default <code>{`underline="always"`}</code> behavior.
        </li>
        <li>
          If a link doesn&#39;t have a meaningful href,{' '}
          <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
            it should be rendered using a <code>{`<button>`}</code> element
          </a>
          .
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ButtonLink.js"
          className="my-24"
          iframe={false}
          component={require('../components/links/ButtonLink.js').default}
          raw={require('!raw-loader!../components/links/ButtonLink.js')}
        />
      </Typography>
    </>
  );
}

export default LinksDoc;
