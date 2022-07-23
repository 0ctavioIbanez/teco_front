import '../../../App.css'
import { Outlet, Link } from 'react-router-dom'
import Nav from './Nav'
import { useState } from 'react'

import '../../../assets/css/fonts.css'
import '../../../assets/css/bootstrap.min.css'
import '../../../assets/css/atlantis.css'

const Layout = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleSidebar = e => {
        const htmlTag = document.querySelector("html");
        if (htmlTag.classList.contains("nav_open")) {
            htmlTag.classList.remove("nav_open")
        } else {
            htmlTag.classList.add("nav_open")
        }
    }

    return (
        <div className={`wrapper ${showSidebar ? 'sidebar_minimize' : null}`}>
            <div className="main-header">
                {/* Logo Header */}
                <div className="logo-header" data-background-color="blue">
                    <Link to="/admin/dashboard" className="logo">
                        <img src="../assets/img/logo.svg" alt="navbar brand" className="navbar-brand" />
                    </Link>
                    <button className="navbar-toggler sidenav-toggler ml-auto" onClick={e => handleSidebar(e)}>
                        <span className="navbar-toggler-icon">
                            <i className="icon-menu" />
                        </span>
                    </button>
                    <button className="topbar-toggler more"><i className="icon-options-vertical" /></button>
                    <div className="nav-toggle">
                        <button className="btn btn-toggle toggle-sidebar" onClick={e => setShowSidebar(!showSidebar)}>
                            <i className="icon-menu" />
                        </button>
                    </div>
                </div>
                {/* End Logo Header */}
                {/* Navbar Header */}
                <nav className="navbar navbar-header navbar-expand-lg" data-background-color="blue2">
                    <div className="container-fluid">
                        <div className="collapse" id="search-nav">
                            <form className="navbar-left navbar-form nav-search mr-md-3">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <button type="submit" className="btn btn-search pr-1">
                                            <i className="fa fa-search search-icon" />
                                        </button>
                                    </div>
                                    <input type="text" placeholder="Search ..." className="form-control" />
                                </div>
                            </form>
                        </div>
                        <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
                            <li className="nav-item toggle-nav-search hidden-caret">
                                <span className="nav-link">
                                    <i className="fa fa-search" />
                                </span>
                            </li>
                            <li className="nav-item dropdown hidden-caret">
                                <span className="nav-link dropdown-toggle" href="#">
                                    <i className="fa fa-envelope" />
                                </span>
                                <ul className="dropdown-menu messages-notif-box animated fadeIn" aria-labelledby="messageDropdown">
                                    <li>
                                        <div className="dropdown-title d-flex justify-content-between align-items-center">
                                            Messages
                                            <span className="small">Mark all as read</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="message-notif-scroll scrollbar-outer">
                                            <div className="notif-center">
                                                <span>
                                                    <div className="notif-img">
                                                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Img Profile" />
                                                    </div>
                                                    <div className="notif-content">
                                                        <span className="subject">Jimmy Denis</span>
                                                        <span className="block">
                                                            How are you ?
                                                        </span>
                                                        <span className="time">5 minutes ago</span>
                                                    </div>
                                                </span>
                                                <span>
                                                    <div className="notif-img">
                                                        <img src="../assets/img/chadengle.jpg" alt="Img Profile" />
                                                    </div>
                                                    <div className="notif-content">
                                                        <span className="subject">Chad</span>
                                                        <span className="block">
                                                            Ok, Thanks !
                                                        </span>
                                                        <span className="time">12 minutes ago</span>
                                                    </div>
                                                </span>
                                                <span>
                                                    <div className="notif-img">
                                                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Img Profile" />
                                                    </div>
                                                    <div className="notif-content">
                                                        <span className="subject">Jhon Doe</span>
                                                        <span className="block">
                                                            Ready for the meeting today...
                                                        </span>
                                                        <span className="time">12 minutes ago</span>
                                                    </div>
                                                </span>
                                                <span>
                                                    <div className="notif-img">
                                                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Img Profile" />
                                                    </div>
                                                    <div className="notif-content">
                                                        <span className="subject">Talha</span>
                                                        <span className="block">
                                                            Hi, Apa Kabar ?
                                                        </span>
                                                        <span className="time">17 minutes ago</span>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="see-all">See all messages<i className="fa fa-angle-right" /> </span>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown hidden-caret">
                                <span className="nav-link dropdown-toggle">
                                    <i className="fa fa-bell" />
                                    <span className="notification">4</span>
                                </span>
                                <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
                                    <li>
                                        <div className="dropdown-title">You have 4 new notification</div>
                                    </li>
                                    <li>
                                        <div className="notif-scroll scrollbar-outer">
                                            <div className="notif-center">
                                                <span>
                                                    <div className="notif-icon notif-primary"> <i className="fa fa-user-plus" /> </div>
                                                    <div className="notif-content">
                                                        <span className="block">
                                                            New user registered
                                                        </span>
                                                        <span className="time">5 minutes ago</span>
                                                    </div>
                                                </span>
                                                <span>
                                                    <div className="notif-icon notif-success"> <i className="fa fa-comment" /> </div>
                                                    <div className="notif-content">
                                                        <span className="block">
                                                            Rahmad commented on Admin
                                                        </span>
                                                        <span className="time">12 minutes ago</span>
                                                    </div>
                                                </span>
                                                <span>
                                                    <div className="notif-img">
                                                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Img Profile" />
                                                    </div>
                                                    <div className="notif-content">
                                                        <span className="block">
                                                            Reza send messages to you
                                                        </span>
                                                        <span className="time">12 minutes ago</span>
                                                    </div>
                                                </span>
                                                <span>
                                                    <div className="notif-icon notif-danger"> <i className="fa fa-heart" /> </div>
                                                    <div className="notif-content">
                                                        <span className="block">
                                                            Farrah liked Admin
                                                        </span>
                                                        <span className="time">17 minutes ago</span>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="see-all">See all notifications<i className="fa fa-angle-right" /> </span>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown hidden-caret">
                                <span className="nav-link">
                                    <i className="fas fa-layer-group" />
                                </span>
                                <div className="dropdown-menu quick-actions quick-actions-info animated fadeIn">
                                    <div className="quick-actions-header">
                                        <span className="title mb-1">Quick Actions</span>
                                        <span className="subtitle op-8">Shortcuts</span>
                                    </div>
                                    <div className="quick-actions-scroll scrollbar-outer">
                                        <div className="quick-actions-items">
                                            <div className="row m-0">
                                                <span className="col-6 col-md-4 p-0">
                                                    <div className="quick-actions-item">
                                                        <i className="flaticon-file-1" />
                                                        <span className="text">Generated Report</span>
                                                    </div>
                                                </span>
                                                <span className="col-6 col-md-4 p-0">
                                                    <div className="quick-actions-item">
                                                        <i className="flaticon-database" />
                                                        <span className="text">Create New Database</span>
                                                    </div>
                                                </span>
                                                <span>
                                                    <div className="quick-actions-item">
                                                        <i className="flaticon-pen" />
                                                        <span className="text">Create New Post</span>
                                                    </div>
                                                </span>
                                                <span>
                                                    <div className="quick-actions-item">
                                                        <i className="flaticon-interface-1" />
                                                        <span className="text">Create New Task</span>
                                                    </div>
                                                </span>
                                                <span>
                                                    <div className="quick-actions-item">
                                                        <i className="flaticon-list" />
                                                        <span className="text">Completed Tasks</span>
                                                    </div>
                                                </span>
                                                <span>
                                                    <div className="quick-actions-item">
                                                        <i className="flaticon-file" />
                                                        <span className="text">Create New Invoice</span>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown hidden-caret">
                                <span className="dropdown-toggle profile-pic">
                                    <div className="avatar-sm">
                                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..." className="avatar-img rounded-circle" />
                                    </div>
                                </span>
                                <ul className="dropdown-menu dropdown-user animated fadeIn">
                                    <div className="dropdown-user-scroll scrollbar-outer">
                                        <li>
                                            <div className="user-box">
                                                <div className="avatar-lg"><img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image profile" className="avatar-img rounded" /></div>
                                                <div className="u-text">
                                                    <h4>Hizrian</h4>
                                                    <p className="text-muted">hello@example.com</p><span className="btn btn-xs btn-secondary btn-sm">View Profile</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropdown-divider" />
                                            <span className="dropdown-item" href="#">My Profile</span>
                                            <span className="dropdown-item" href="#">My Balance</span>
                                            <span className="dropdown-item" href="#">Inbox</span>
                                            <div className="dropdown-divider" />
                                            <span className="dropdown-item" href="#">Account Setting</span>
                                            <div className="dropdown-divider" />
                                            <span className="dropdown-item" href="#">Logout</span>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* End Navbar */}
            </div>
            {/* Sidebar */}
            <div className="sidebar sidebar-style-2">
                <div className="sidebar-wrapper scrollbar scrollbar-inner">
                    <div className="sidebar-content">
                        <div className="user">
                            <div className="avatar-sm float-left mr-2">
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..." className="avatar-img rounded-circle" />
                            </div>
                            <div className="info">
                                <span>
                                    <span>
                                        Hizrian
                                        <span className="user-level">Administrator</span>
                                        <span className="caret" />
                                    </span>
                                </span>
                                <div className="clearfix" />
                                <div className="collapse in" id="collapseExample">
                                    <ul className="nav">
                                        <li>
                                            <span>
                                                <span className="link-collapse">My Profile</span>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <span className="link-collapse">Edit Profile</span>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <span className="link-collapse">Settings</span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <ul className="nav nav-primary">
                            <Nav />
                        </ul>
                    </div>
                </div>
            </div>
            {/* End Sidebar */}
            <div className="main-panel">
                <div className="content">
                    {/* <div className="panel-header bg-primary-gradient">
                        <div className="page-inner py-5">
                            <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row">
                                <div>
                                    <h2 className="text-white pb-2 fw-bold">Dashboard</h2>
                                    <h5 className="text-white op-7 mb-2">Free Bootstrap 4 Admin Dashboard</h5>
                                </div>
                                <div className="ml-md-auto py-2 py-md-0">
                                    <a href="#" className="btn btn-white btn-border btn-round mr-2">Manage</a>
                                    <a href="#" className="btn btn-secondary btn-round">Add Customer</a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <Outlet />

                </div>
                <footer className="footer">
                    <div className="container-fluid">
                        <nav className="pull-left">
                            <ul className="nav">
                                <li className="nav-item">
                                    <span className="nav-link">
                                        ThemeKita
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">
                                        Help
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link" href="#">
                                        Licenses
                                    </span>
                                </li>
                            </ul>
                        </nav>
                        <div className="copyright ml-auto">
                            
                        </div>
                    </div>
                </footer>
            </div>
            {/* Custom template | don't include it in your project! */}
        </div>
    )
}

export default Layout