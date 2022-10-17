import React from 'react'
import DashboardLayout from "../components/layouts/DashboardLayout/DashboardLayout";


const Settings = () => {
  return (
    <div>Settings</div>
  )
}

export default Settings;

Settings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>
