import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Rectangle, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const data = [];

    const quizzes = useLoaderData();
    console.log(quizzes.data)

    for (const quiz of quizzes.data) {
        data.push({
            name: quiz.name,
            uv: quiz.total
        })
    }

    const renderLineChart = (
        <BarChart width={700} height={500} data={data} margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 25,
        }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" label={{ value: 'Quiz Type', position: 'insideBottom', offset: -20 }} />
            <YAxis label={{ value: 'Number of Questions', angle: -90 }} />
            <Tooltip />
            <Bar dataKey="uv" fill="#fde047" activeBar={<Rectangle fill="gold" stroke="purple" />} />

        </BarChart>
    );

    return (

        <div className='flex justify-center flex-col gap-4 mt-10 items-center'>
            <h1 className='font-bold text-md '>How many questions in each quiz?</h1>
            <p className='text-center w-2/3 mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam in cupiditate totam unde cumque est nam dolorum neque ut eum vel eos beatae minus, blanditiis odit id architecto quia animi quis dolorem exercitationem quos at. Et assumenda, eius provident fugiat, deserunt voluptatem nam commodi soluta ipsa voluptatibus officiis recusandae laudantium quam tenetur. Culpa illo repudiandae quis odit dignissimos aut ea illum recusandae atque tempora quam voluptas unde corporis rem, modi ab consequatur quaerat a neque beatae fuga! Assumenda voluptas ea architecto temporibus sed corrupti tenetur laboriosam facilis, ratione debitis? Labore voluptates natus ipsum omnis perferendis, esse harum quibusdam. Soluta, eos.</p>

            <div className='my-16'>
                {renderLineChart}
            </div>
        </div>
    );
};

export default Statistics;