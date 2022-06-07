import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';

function ModernInvoicePage() {
  return (
    <div className="inline-block p-24 sm:p-40 text-left print:p-0 w-full overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ bounceDamping: 0 }}
      >
        <Card className="w-xl p-64 mx-auto rounded-2xl shadow print:w-auto print:rounded-none print:shadow-none print:bg-transparent">
          <CardContent className="">
            <div className="flex items-start">
              <div className="grid grid-rows-2 place-items-start gap-y-48">
                <div className="grid auto-cols-max grid-flow-col gap-x-32">
                  <div className="place-self-center w-96">
                    <img className="w-96" src="assets/images/logo/logo.svg" alt="lozgo" />
                  </div>
                  <div className="pl-40 border-l text-md">
                    <Typography className="font-medium">Fuse Inc.</Typography>
                    <Typography>2810 Country Club Road</Typography>
                    <Typography>Cranford, NJ 07016</Typography>
                    <Typography>+66 123 455 87</Typography>
                    <Typography>hello@fuseinc.com</Typography>
                    <Typography>www.fuseinc.com</Typography>
                  </div>
                </div>
                <div className="grid auto-cols-max grid-flow-col gap-x-32">
                  <Typography
                    className="place-self-center w-96 text-center text-2xl"
                    color="text.secondary"
                  >
                    Bill To
                  </Typography>
                  <div className="pl-40 border-l text-md">
                    <Typography className="font-medium">Brian Hughes</Typography>
                    <Typography>9301 Wood Street</Typography>
                    <Typography>Philadelphia, PA 19111</Typography>
                    <Typography>+55 552 455 87</Typography>
                    <Typography>hughes.brian@company.com</Typography>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-16 gap-y-4 ml-auto">
                <Typography
                  className="justify-self-end text-4xl tracking-tight"
                  color="text.secondary"
                >
                  INVOICE
                </Typography>
                <Typography className="text-4xl">#9-0004</Typography>
                <Typography
                  className="justify-self-end font-medium tracking-tight"
                  color="text.secondary"
                >
                  INVOICE DATE
                </Typography>
                <Typography className="font-medium">Jul 19, 2022</Typography>
                <Typography
                  className="justify-self-end font-medium tracking-tight"
                  color="text.secondary"
                >
                  DUE DATE
                </Typography>
                <Typography className="font-medium">Aug 19, 2022</Typography>
                <Typography
                  className="justify-self-end font-medium tracking-tight"
                  color="text.secondary"
                >
                  TOTAL DUE
                </Typography>
                <Typography className="font-medium">$49,000.00</Typography>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-x-4 mt-16">
              <Typography className="col-span-8 font-medium text-md" color="text.secondary">
                SERVICE
              </Typography>
              <Typography className="font-medium text-md text-right" color="text.secondary">
                RATE
              </Typography>
              <Typography className="font-medium text-md text-right" color="text.secondary">
                QTY
              </Typography>
              <Typography
                className="col-span-2 font-medium text-md text-right"
                color="text.secondary"
              >
                TOTAL
              </Typography>

              <div className="col-span-12 my-16 border-b" />

              <div className="col-span-8">
                <Typography className="text-lg font-medium">Prototype & Design</Typography>
                <Typography className="mt-8 text-md" color="text.secondary">
                  Prototyping of the application's general workflow and the detailed design of its
                  72 screens as a working prototype.
                </Typography>
              </div>
              <Typography className="self-center text-right">$75.00</Typography>
              <Typography className="self-center text-right">240</Typography>
              <Typography className="col-span-2 self-center text-right">$18,000.00</Typography>

              <div className="col-span-12 my-16 border-b" />

              <div className="col-span-8">
                <Typography className="text-lg font-medium">Development</Typography>
                <Typography className="mt-8 text-md" color="text.secondary">
                  The web and mobile development of the application using appropriate tools and
                  registering it to major application stores.
                </Typography>
              </div>
              <Typography className="self-center text-right">$60.50</Typography>
              <Typography className="self-center text-right">350</Typography>
              <Typography className="col-span-2 self-center text-right">$21,175.00</Typography>

              <div className="col-span-12 my-16 border-b" />

              <div className="col-span-8">
                <Typography className="text-lg font-medium">Testing</Typography>
                <Typography className="mt-8 text-md" color="text.secondary">
                  Extensive testing of the application using various mobile and desktop devices with
                  different operating systems.
                </Typography>
              </div>
              <Typography className="self-center text-right">$25.00</Typography>
              <Typography className="self-center text-right">50</Typography>
              <Typography className="col-span-2 self-center text-right">$1,250.00</Typography>

              <div className="col-span-12 my-16 border-b" />

              <div className="col-span-8">
                <Typography className="text-lg font-medium">Documentation & Training</Typography>
                <Typography className="mt-8 text-md" color="text.secondary">
                  Development of the detailed documentation, preparing guides and instructional
                  videos and extensive training of 2 people.
                </Typography>
              </div>
              <Typography className="self-center text-right">$26.50</Typography>
              <Typography className="self-center text-right">260</Typography>
              <Typography className="col-span-2 self-center text-right">$6,890.00</Typography>

              <div className="col-span-12 mt-64" />

              <Typography
                className="col-span-10 self-center font-medium tracking-tight"
                color="text.secondary"
              >
                SUBTOTAL
              </Typography>
              <Typography className="col-span-2 text-right text-lg">$47,315.00</Typography>

              <div className="col-span-12 my-12 border-b" />

              <Typography
                className="col-span-10 self-center font-medium tracking-tight"
                color="text.secondary"
              >
                TAX
              </Typography>
              <Typography className="col-span-2 text-right text-lg">$2,365.75</Typography>

              <div className="col-span-12 my-12 border-b" />

              <Typography
                className="col-span-10 self-center font-medium tracking-tight"
                color="text.secondary"
              >
                DISCOUNT
              </Typography>
              <Typography className="col-span-2 text-right text-lg">$180.75</Typography>

              <div className="col-span-12 my-12 border-b" />

              <Typography
                className="col-span-10 self-center text-2xl font-medium tracking-tight"
                color="text.secondary"
              >
                TOTAL
              </Typography>
              <Typography className="col-span-2 text-right text-2xl font-medium">
                $49,000.00
              </Typography>
            </div>

            <div className="mt-64">
              <Typography className="font-medium">
                Please pay within 15 days. Thank you for your business.
              </Typography>
              <div className="flex items-start mt-16">
                <img className="flex-0 w-40 mt-8" src="assets/images/logo/logo.svg" alt="logo" />
                <Typography className="ml-24 text-sm" color="text.secondary">
                  In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue
                  dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis
                  pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam
                  at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis,
                  in porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget.
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default ModernInvoicePage;

/**

 Use the following elements to add breaks to your pages. This will make sure that the section in between
 these elements will be printed on a new page. The following two elements must be used before and after the
 page content that you want to show as a new page. So, you have to wrap your content with them.

 Elements:
 ---------
 <div className="page-break-after"></div>
 <div className="page-break-before"></div>


 Example:
 --------

 Initial page content!

 <div className="page-break-after"></div>
 <div className="page-break-before"></div>

 This is the second page!

 <div className="page-break-after"></div>
 <div className="page-break-before"></div>

 This is the third page!

 <div className="page-break-after"></div>
 <div className="page-break-before"></div>
 * */
