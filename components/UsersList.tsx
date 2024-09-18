import { fetchUsers } from '@/utils/actions';
import React from 'react'
import DeleteButton from './DeleteButton';

async function UsersList() {
    const users = await fetchUsers();

    return (
        <div className='mt-4'>
            {users.length ? 
                <div>
                    {users.map((user) => {
                        return (
                            <h4 key={user.id} className='capitalize text-lg flex justify-between'>
                                {user.firstName} {user.lastName} 
                                <DeleteButton id={user.id} />
                            </h4>
                        )
                    })}
                </div>
            :
                <p>No users founded</p>
            }
        </div>
    )
}

export default UsersList