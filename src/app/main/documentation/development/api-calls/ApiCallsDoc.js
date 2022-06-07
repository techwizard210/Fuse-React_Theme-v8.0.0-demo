import Typography from '@mui/material/Typography';
import FuseHighlight from '@fuse/core/FuseHighlight';
import { Link } from 'react-router-dom';

function ApiCallsDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        API Calls
      </Typography>

      <Typography className="mb-24" component="p">
        We are using HTTP request library{' '}
        <a href="https://github.com/axios" target="_blank" rel="noreferrer noopener">
          Axios
        </a>{' '}
        for to make API calls.
      </Typography>

      <Typography className="mt-24 mb-10" variant="h6">
        Global Axios defaults
      </Typography>

      <Typography className="mb-16" component="p">
        You can config global axios defaults as below. For example you can define baseUrl for the
        api connection. Check out for more detils at:{' '}
        <a
          href="https://github.com/axios/axios#config-defaults"
          target="_blank"
          rel="noreferrer noopener"
        >
          Global axios defaults
        </a>
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {`
					axios.defaults.baseURL = 'https://api.example.com';
					axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
					axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
				`}
      </FuseHighlight>

      <Typography className="mt-24 mb-10" variant="h6">
        @mock-api
      </Typography>

      <Typography className="mb-16" component="p">
        We are using{' '}
        <a
          href="https://github.com/ctimmerm/axios-mock-adapter"
          target="_blank"
          rel="noreferrer noopener"
        >
          axios-mock-adapter
        </a>{' '}
        to demonstrate http requests, all of the example backend data is located at src/@mock-api.
      </Typography>

      <Typography className="mb-16" component="p">
        @mock-api is developed specifically for Fuse React to mock API endpoints and provide data to
        your app without having to create an actual backend application. This way, you can focus on
        your frontend app and once you finish with the frontend, you can create your backend
        application to provide real API endpoints with real data.
      </Typography>

      <Typography className="mb-16" component="p">
        This not only makes you progress faster and put together your app very quickly but you will
        also know exactly what you will be needing from your API.
      </Typography>

      <Typography className="mb-16" component="p">
        We have created open api definitions and followed this definitions while generating
        @mock-api. You can use the definitions as an example while creating your api. Checkout
        <Link className="link mx-8" to="/documentation/mock-api">
          the Mock API documentation
        </Link>
      </Typography>

      <Typography className="mb-16" component="p">
        You can adjust <code>delayResponse</code> value to test slow networks in the file:{' '}
        <code>src/@mock-api/mock.js</code>.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {`
					const MockAdapter = require('axios-mock-adapter');
					const axios = require('axios');
					
					const mock = new MockAdapter(axios, { delayResponse: 500 });
					
					export default mock;
				`}
      </FuseHighlight>
    </>
  );
}

export default ApiCallsDoc;
