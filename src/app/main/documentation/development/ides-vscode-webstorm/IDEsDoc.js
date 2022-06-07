import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

function IDEsDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        IDEs
      </Typography>

      <Typography className="text-20 mb-10 font-700" variant="h5">
        Webstorm
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        Using Prettier with ESLint
      </Typography>

      <Typography className="mb-16" component="p">
        We are using ESLint with <b>eslint-plugin-prettier</b>. You should use the{' '}
        <b>Fix ESLint Problems</b> action to reformat the current file/folder – find it using Find
        Action (Cmd/Ctrl-Shift-A) or add a keyboard shortcut to it in <b>Preferences | Keymap</b>{' '}
        and then use it. Make sure that the <b>ESLint integration</b> is enabled in{' '}
        <b>Preferences | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint</b>.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Visual Studio Code (VSCode)
      </Typography>

      <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
        Using Prettier with ESLint
      </Typography>

      <Typography className="mb-16" component="p">
        You need to install <b>ESLint</b> and <b>Prettier</b> plugins - can be installed using the
        extension sidebar in VSCode
      </Typography>

      <Typography className="mb-16" component="p">
        Here is the example <b>settings.json</b> configuration. With this configuration, fixes will
        be applied whenever file is saved.
      </Typography>

      <FuseHighlight component="pre" className="language-json mb-24">
        {`
							"editor.defaultFormatter": "esbenp.prettier-vscode",
							"[javascript]": {
								"editor.defaultFormatter": "esbenp.prettier-vscode"
							},
							"eslint.alwaysShowStatus": true,
							"editor.formatOnSave": true,
							"editor.formatOnPaste": true,
							"eslint.format.enable": true,
							"editor.codeActionsOnSave": {
								"source.fixAll.eslint": true
							}
						`}
      </FuseHighlight>
    </>
  );
}

export default IDEsDoc;
