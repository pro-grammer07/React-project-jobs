import React from 'react';
import Card from './Card';

const HomeCards = () => {
    return (
        <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <Card role="For Developers" text="Browse our React jobs and start your career today" btntext='Browse Jobs' />
                    <Card bg='bg-indigo-100' role="For Employers" text="List your Job to find the perfect developer for the role" btntext='Add Job' btncolor='bg-indigo-500' />

                </div>
            </div>
        </section>

    )
}

export default HomeCards