
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, LabelList } from 'recharts';

const BarChart = ({ data }) => {
  const chartData = data.map(book => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  console.log('Bar chart data:', chartData);

  return (
    <div>
      <RechartsBarChart
        width={800}
        height={400}
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" angle={-45} textAnchor="end" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pages" fill="#8884d8">
          <LabelList dataKey="pages" position="top" />
        </Bar>
      </RechartsBarChart>
    </div>
  );
};

export default BarChart;
