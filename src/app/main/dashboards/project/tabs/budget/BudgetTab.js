import { motion } from 'framer-motion';
import BudgetDistributionWidget from './widgets/BudgetDistributionWidget';
import WeeklyExpensesWidget from './widgets/WeeklyExpensesWidget';
import MonthlyExpensesWidget from './widgets/MonthlyExpensesWidget';
import YearlyExpensesWidget from './widgets/YearlyExpensesWidget';
import BudgetDetailsWidget from './widgets/BudgetDetailsWidget';

function BudgetTab() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-6 gap-24 w-full min-w-0 p-24"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="sm:col-span-3 lg:col-span-4">
        <BudgetDistributionWidget />
      </motion.div>

      <div className="sm:col-span-3 lg:col-span-2 grid grid-cols-1 gap-y-24">
        <motion.div variants={item} className="sm:col-span-2">
          <WeeklyExpensesWidget />
        </motion.div>
        <motion.div variants={item} className="sm:col-span-2">
          <MonthlyExpensesWidget />
        </motion.div>
        <motion.div variants={item} className="sm:col-span-2">
          <YearlyExpensesWidget />
        </motion.div>
      </div>

      <motion.div variants={item} className="sm:col-span-6">
        <BudgetDetailsWidget />
      </motion.div>

      {/*   <motion.div variants={item} className="widget flex w-full sm:w-1/2 p-12">
        <Widget8 widget={widgets.widget8} />
      </motion.div>
      <motion.div variants={item} className="widget flex w-full sm:w-1/2 p-12">
        <Widget9 widget={widgets.widget9} />
      </motion.div>
      <motion.div variants={item} className="widget flex w-full p-12">
        <Widget10 widget={widgets.widget10} />
      </motion.div> */}
    </motion.div>
  );
}

export default BudgetTab;
