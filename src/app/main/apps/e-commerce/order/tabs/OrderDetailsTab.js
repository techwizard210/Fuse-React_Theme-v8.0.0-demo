import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GoogleMap from 'google-map-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import OrdersStatus from '../OrdersStatus';
import { selectOrder } from '../../store/orderSlice';

function Marker(props) {
  return (
    <Tooltip title={props.text} placement="top">
      <FuseSvgIcon className="text-red">heroicons-outline:location-marker</FuseSvgIcon>
    </Tooltip>
  );
}

function OrderDetailsTab() {
  const order = useSelector(selectOrder);
  const [map, setMap] = useState('shipping');

  return (
    <div>
      <div className="pb-48">
        <div className="pb-16 flex items-center">
          <FuseSvgIcon color="action">heroicons-outline:user-circle</FuseSvgIcon>
          <Typography className="h2 mx-12 font-medium" color="text.secondary">
            Customer
          </Typography>
        </div>

        <div className="mb-24">
          <div className="table-responsive mb-48">
            <table className="simple">
              <thead>
                <tr>
                  <th>
                    <Typography className="font-semibold">Name</Typography>
                  </th>
                  <th>
                    <Typography className="font-semibold">Email</Typography>
                  </th>
                  <th>
                    <Typography className="font-semibold">Phone</Typography>
                  </th>
                  <th>
                    <Typography className="font-semibold">Company</Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center">
                      <Avatar src={order.customer.avatar} />
                      <Typography className="truncate mx-8">
                        {`${order.customer.firstName} ${order.customer.lastName}`}
                      </Typography>
                    </div>
                  </td>
                  <td>
                    <Typography className="truncate">{order.customer.email}</Typography>
                  </td>
                  <td>
                    <Typography className="truncate">{order.customer.phone}</Typography>
                  </td>
                  <td>
                    <span className="truncate">{order.customer.company}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Accordion
            className="border-0 shadow-0 overflow-hidden"
            expanded={map === 'shipping'}
            onChange={() => setMap(map !== 'shipping' ? 'shipping' : false)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              classes={{ root: 'border border-solid rounded-16 mb-16' }}
            >
              <Typography className="font-semibold">Shipping Address</Typography>
            </AccordionSummary>
            <AccordionDetails className="flex flex-col md:flex-row -mx-8">
              <Typography className="w-full md:max-w-256 mb-16 md:mb-0 mx-8 text-16">
                {order.customer.shippingAddress.address}
              </Typography>
              <div className="w-full h-320 rounded-16 overflow-hidden mx-8">
                <GoogleMap
                  bootstrapURLKeys={{
                    key: process.env.REACT_APP_MAP_KEY,
                  }}
                  defaultZoom={15}
                  defaultCenter={[
                    order.customer.shippingAddress.lat,
                    order.customer.shippingAddress.lng,
                  ]}
                >
                  <Marker
                    text={order.customer.shippingAddress.address}
                    lat={order.customer.shippingAddress.lat}
                    lng={order.customer.shippingAddress.lng}
                  />
                </GoogleMap>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="shadow-0 border-0 overflow-hidden"
            expanded={map === 'invoice'}
            onChange={() => setMap(map !== 'invoice' ? 'invoice' : false)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              classes={{ root: 'border border-solid rounded-16 mb-16' }}
            >
              <Typography className="font-semibold">Invoice Address</Typography>
            </AccordionSummary>
            <AccordionDetails className="flex flex-col md:flex-row -mx-8">
              <Typography className="w-full md:max-w-256 mb-16 md:mb-0 mx-8 text-16">
                {order.customer.invoiceAddress.address}
              </Typography>
              <div className="w-full h-320 rounded-16 overflow-hidden mx-8">
                <GoogleMap
                  bootstrapURLKeys={{
                    key: process.env.REACT_APP_MAP_KEY,
                  }}
                  defaultZoom={15}
                  defaultCenter={[
                    order.customer.invoiceAddress.lat,
                    order.customer.invoiceAddress.lng,
                  ]}
                >
                  <Marker
                    text={order.customer.invoiceAddress.address}
                    lat={order.customer.invoiceAddress.lat}
                    lng={order.customer.invoiceAddress.lng}
                  />
                </GoogleMap>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="pb-48">
        <div className="pb-16 flex items-center">
          <FuseSvgIcon color="action">heroicons-outline:clock</FuseSvgIcon>
          <Typography className="h2 mx-12 font-medium" color="text.secondary">
            Order Status
          </Typography>
        </div>

        <div className="table-responsive">
          <table className="simple">
            <thead>
              <tr>
                <th>
                  <Typography className="font-semibold">Status</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">Updated On</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {order.status.map((status) => (
                <tr key={status.id}>
                  <td>
                    <OrdersStatus name={status.name} />
                  </td>
                  <td>{status.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="pb-48">
        <div className="pb-16 flex items-center">
          <FuseSvgIcon color="action">heroicons-outline:currency-dollar</FuseSvgIcon>
          <Typography className="h2 mx-12 font-medium" color="text.secondary">
            Payment
          </Typography>
        </div>

        <div className="table-responsive">
          <table className="simple">
            <thead>
              <tr>
                <th>
                  <Typography className="font-semibold">TransactionID</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">Payment Method</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">Amount</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">Date</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="truncate">{order.payment.transactionId}</span>
                </td>
                <td>
                  <span className="truncate">{order.payment.method}</span>
                </td>
                <td>
                  <span className="truncate">{order.payment.amount}</span>
                </td>
                <td>
                  <span className="truncate">{order.payment.date}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="pb-48">
        <div className="pb-16 flex items-center">
          <FuseSvgIcon color="action">heroicons-outline:truck</FuseSvgIcon>
          <Typography className="h2 mx-12 font-medium" color="text.secondary">
            Shipping
          </Typography>
        </div>

        <div className="table-responsive">
          <table className="simple">
            <thead>
              <tr>
                <th>
                  <Typography className="font-semibold">Tracking Code</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">Carrier</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">Weight</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">Fee</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">Date</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {order.shippingDetails.map((shipping) => (
                <tr key={shipping.date}>
                  <td>
                    <span className="truncate">{shipping.tracking}</span>
                  </td>
                  <td>
                    <span className="truncate">{shipping.carrier}</span>
                  </td>
                  <td>
                    <span className="truncate">{shipping.weight}</span>
                  </td>
                  <td>
                    <span className="truncate">{shipping.fee}</span>
                  </td>
                  <td>
                    <span className="truncate">{shipping.date}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsTab;
