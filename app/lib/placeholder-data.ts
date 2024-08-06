// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a', // UUID válido
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
  {
    id: 'f7a5a5a5-4001-4271-9855-fec4b6a6442a', // UUID corregido
    name: 'Admin',
    email: 'admin@nextmail.com',
    password: 'password',
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa', // UUID válido
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a', // UUID válido
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a', // UUID válido
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2', // UUID válido
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'cc27c14a-0acf-4f4a-a6c9-d45682c144b9', // UUID corregido (minúsculas)
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13d07535-c59e-4157-a011-f8d2ef4e0cbb', // UUID corregido (minúsculas)
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa', // UUID válido
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a', // UUID válido
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: 'cc27c14a-0acf-4f4a-a6c9-d45682c144b9', // UUID válido
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: '76d65c26-f784-44a2-ac19-586678f7c2f2', // UUID válido
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: '13d07535-c59e-4157-a011-f8d2ef4e0cbb', // UUID válido
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a', // UUID válido
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa', // UUID válido
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: '76d65c26-f784-44a2-ac19-586678f7c2f2', // UUID válido
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: 'cc27c14a-0acf-4f4a-a6c9-d45682c144b9', // UUID válido
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: '13d07535-c59e-4157-a011-f8d2ef4e0cbb', // UUID válido
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a', // UUID válido
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: '13d07535-c59e-4157-a011-f8d2ef4e0cbb', // UUID válido
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a', // UUID válido
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

export { users, customers, invoices, revenue };
