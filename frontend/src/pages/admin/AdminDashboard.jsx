import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Users, FileText, Loader2, Calendar, Mail, Phone, ChevronRight, LayoutDashboard, Search, Bell, Settings } from 'lucide-react';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('contacts');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const fetchDashboardData = async (type) => {
        setIsLoading(true);
        setError('');
        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch(`http://localhost:5000/api/admin/${type}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 401) {
                handleLogout();
                return;
            }

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const result = await response.json();
            setData(result);
        } catch (err) {
            console.error('Fetch error:', err);
            setError(`Could not load ${type} data`);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchDashboardData(activeTab);
    }, [activeTab]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">

            {/* Sidebar - Premium Dark */}
            <aside className="w-64 bg-navy-900 border-r border-navy-800 flex flex-col hidden md:flex shadow-2xl z-20">
                {/* Logo Area */}
                <div className="h-20 flex items-center px-6 border-b border-white/10 bg-black/10">
                    <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg border border-blue-400/50">
                            <span className="text-white font-black text-xl leading-none">A</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-lg leading-tight tracking-wide">AAPTHI<span className="text-blue-400 font-medium tracking-normal">ADMIN</span></span>
                        </div>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
                    <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Main Menu</p>

                    <button
                        onClick={() => setActiveTab('contacts')}
                        className={`w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-200 group ${activeTab === 'contacts'
                            ? 'bg-blue-600/10 text-blue-400'
                            : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                            }`}
                    >
                        <div className="flex items-center">
                            <Users className={`h-5 w-5 mr-3 transition-colors ${activeTab === 'contacts' ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                            <span className="font-medium">Inquiries</span>
                        </div>
                        {activeTab === 'contacts' && (
                            <div className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-md text-xs font-bold">
                                {data.length}
                            </div>
                        )}
                    </button>

                    <button
                        onClick={() => setActiveTab('careers')}
                        className={`w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-200 group ${activeTab === 'careers'
                            ? 'bg-blue-600/10 text-blue-400'
                            : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                            }`}
                    >
                        <div className="flex items-center">
                            <FileText className={`h-5 w-5 mr-3 transition-colors ${activeTab === 'careers' ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                            <span className="font-medium">Applications</span>
                        </div>
                        {activeTab === 'careers' && (
                            <div className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-md text-xs font-bold">
                                {data.length}
                            </div>
                        )}
                    </button>

                    <button
                        onClick={() => { }}
                        className="w-full flex items-center px-3 py-3 rounded-xl text-slate-500 hover:bg-white/5 hover:text-slate-200 transition-all duration-200 cursor-not-allowed opacity-50"
                        title="Coming Soon"
                    >
                        <LayoutDashboard className="h-5 w-5 mr-3 text-slate-600" />
                        <span className="font-medium">Analytics</span>
                    </button>
                </nav>

                {/* Bottom Settings / User / Logout Area */}
                <div className="p-4 border-t border-white/10 bg-black/20">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition-colors border border-transparent hover:border-rose-500/20"
                    >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">

                {/* Top Header - Light/Clean */}
                <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 z-10 sticky top-0">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-slate-800">
                            {activeTab === 'contacts' ? 'Contact Inquiries' : 'Career Applications'}
                        </h1>
                        <span className="ml-4 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-100 uppercase tracking-widest">
                            Live Data
                        </span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-4 py-2 border border-slate-200">
                            <Search className="h-4 w-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent border-none outline-none text-sm ml-2 text-slate-600 w-48 placeholder:text-slate-400"
                                disabled
                            />
                        </div>
                        <button className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition">
                            <Bell className="h-5 w-5" />
                        </button>
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-600 flex items-center justify-center text-white border-2 border-white shadow-sm ring-2 ring-slate-100 cursor-pointer">
                            <span className="text-sm font-bold">AD</span>
                        </div>
                    </div>
                </header>

                {/* Dashboard Canvas Area */}
                <div className="flex-1 overflow-y-auto p-8 bg-[#F8FAFC]">

                    {/* Welcome Banner */}
                    <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-r from-transparent to-blue-50/50 group-hover:to-blue-50 transition-colors pointer-events-none"></div>
                        <div className="relative z-10">
                            <h2 className="text-xl font-bold text-slate-800">Welcome back, Admin 👋</h2>
                            <p className="text-slate-500 mt-1 text-sm">Here is what's happening with your website today.</p>
                        </div>
                        <div className="mt-4 sm:mt-0 relative z-10">
                            <button onClick={() => fetchDashboardData(activeTab)} className="text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors border border-blue-100 shadow-sm flex items-center">
                                Refresh Data
                            </button>
                        </div>
                    </div>

                    {/* Data Container Card wrapper */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden relative">
                        {isLoading ? (
                            <div className="flex flex-col items-center justify-center py-40 text-blue-600">
                                <Loader2 className="h-10 w-10 animate-spin mb-4" />
                                <p className="text-slate-500 font-medium">Loading records...</p>
                            </div>
                        ) : error ? (
                            <div className="flex flex-col items-center justify-center py-32">
                                <div className="bg-red-50 text-red-600 px-6 py-4 rounded-xl border border-red-100 font-medium flex items-center shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-red-600 mr-3 animate-pulse"></span>
                                    {error}
                                </div>
                            </div>
                        ) : data.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-40 text-center">
                                <div className="bg-slate-50 rounded-full p-6 mb-4 shadow-inner border border-slate-100">
                                    {activeTab === 'contacts' ? <Users className="h-10 w-10 text-slate-300" /> : <FileText className="h-10 w-10 text-slate-300" />}
                                </div>
                                <h3 className="text-lg font-bold text-slate-800">No {activeTab} yet</h3>
                                <p className="text-slate-500 mt-1 text-sm max-w-sm">When users submit forms on the website, they will appear here automatically.</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-left border-collapse whitespace-nowrap">
                                    <thead>
                                        <tr className="bg-slate-50/80 border-b border-slate-200">
                                            {activeTab === 'contacts' ? (
                                                <>
                                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date & Time</th>
                                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Sender details</th>
                                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Message overview</th>
                                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                                                </>
                                            ) : (
                                                <>
                                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date Applied</th>
                                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Applicant Info</th>
                                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Attached File</th>
                                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                                                </>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {data.map((item) => (
                                            <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                                                {activeTab === 'contacts' ? (
                                                    <>
                                                        <td className="px-6 py-4">
                                                            <div className="flex flex-col">
                                                                <span className="text-sm font-bold text-slate-800">{formatDate(item.created_at).split(',')[0]}</span>
                                                                <span className="text-xs font-medium text-slate-500 flex items-center mt-1"><Calendar className="h-3.5 w-3.5 mr-1 text-slate-400" />{formatDate(item.created_at).split(',')[1]}</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="flex flex-col">
                                                                <span className="text-sm font-bold text-slate-900">{item.name}</span>
                                                                <div className="flex items-center text-sm text-slate-500 mt-1">
                                                                    <Mail className="h-3.5 w-3.5 mr-1.5 text-slate-400" />
                                                                    <a href={`mailto:${item.email}`} className="hover:text-blue-600 hover:underline">{item.email}</a>
                                                                </div>
                                                                {item.phone && (
                                                                    <div className="flex items-center text-sm text-slate-500 mt-1">
                                                                        <Phone className="h-3.5 w-3.5 mr-1.5 text-slate-400" />
                                                                        {item.phone}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-[300px] lg:max-w-md xl:max-w-lg whitespace-normal">
                                                            <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed" title={item.message}>
                                                                {item.message}
                                                            </p>
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            <a href={`mailto:${item.email}`} className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors shadow-sm hover:border-blue-400 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                                                Reply
                                                            </a>
                                                        </td>
                                                    </>
                                                ) : (
                                                    <>
                                                        <td className="px-6 py-4">
                                                            <div className="flex flex-col">
                                                                <span className="text-sm font-bold text-slate-800">{formatDate(item.created_at).split(',')[0]}</span>
                                                                <span className="text-xs font-medium text-slate-500 flex items-center mt-1"><Calendar className="h-3.5 w-3.5 mr-1 text-slate-400" />{formatDate(item.created_at).split(',')[1]}</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center">
                                                                <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold mr-3 border border-slate-300">
                                                                    {item.name.charAt(0).toUpperCase()}
                                                                </div>
                                                                <span className="text-sm font-bold text-slate-900">{item.name}</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg w-fit group-hover:bg-white group-hover:border-slate-300 transition-colors">
                                                                <FileText className="h-4 w-4 text-slate-400 mr-2" />
                                                                <span className="text-sm font-medium text-slate-600 truncate max-w-[200px]">
                                                                    {item.file_path ? item.file_path.split('/').pop() : 'No File Attached'}
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 text-right">
                                                            {item.file_path ? (
                                                                <a
                                                                    href={`http://localhost:5000/${item.file_path}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                                                >
                                                                    View PDF <ChevronRight className="h-4 w-4 ml-1" />
                                                                </a>
                                                            ) : (
                                                                <button disabled className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-400 bg-slate-100 rounded-lg cursor-not-allowed border border-slate-200">
                                                                    No File
                                                                </button>
                                                            )}
                                                        </td>
                                                    </>
                                                )}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    {/* Footer for Dashboard Content */}
                    <div className="mt-8 text-center text-sm font-medium text-slate-400 pb-8">
                        &copy; {new Date().getFullYear()} Aapthi Marketing Solutions Pvt Ltd. All rights reserved.
                    </div>

                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;

