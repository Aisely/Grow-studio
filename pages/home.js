import React from 'react'
import DashboardLayout from "../components/layouts/DashboardLayout/DashboardLayout";


const Home = () => {
  return (
    <div className="mt-24">
      <div>
        <p>Welcome back,</p>
        <h1>
          Paul-Simon
        </h1>
      </div>
      <div></div>
    </div>
  )
}

export default Home

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>