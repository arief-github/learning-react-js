import { dequal } from "dequal";
import * as userClient from '../../helpers/user-client'
import { useUser } from "../../context/user-context";
import { useState } from "react";

export default function UserSetting() {
    const [{ user, status, error }, userDispatch] = useUser()

    const isPending = status === 'pending'
    const isRejected = status === 'rejected'

    const [formState, setFormState] = useState(user)
    const isChanged = !dequal(user, formState)

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        
        userDispatch({ type: 'start update', updates: formState })
        userClient.updateUser(user, formState).then(
            updatedUser => userDispatch({ type: 'finish update', updatedUser }),
            error => userDispatch({ type: 'fail update', error })    
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block' }} htmlFor="username"> Username </label>
                <input
                    id="username"
                    name="username"
                    disabled
                    readOnly
                    value={formState.username}
                    style={{ width: '100%' }}
                />
            </div>
            <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block' }} htmlFor="tagline">Tagline</label>
                <input
                    id="tagline"
                    name="tagline"
                    value={formState.tagline}
                    onChange={handleChange}
                    style={{ width: '100%' }}
                />
            </div>
            <div style={{marginBottom: 12}}>
                <label style={{display: 'block'}} htmlFor="bio">
                Biography
                </label>
                <textarea
                    id="bio"
                    name="bio"
                    value={formState.bio}
                    onChange={handleChange}
                    style={{width: '100%'}}
                />
            </div>
            <button type="button" onClick={() => { 
                setFormState(user)
                userDispatch({ type: 'reset' })
             }}
             disabled={!isChanged || isPending}
             >
                Reset
            </button>
            <button type="submit" disabled={(!isChanged && !isRejected) || isPending}>
            {
                isPending
                ? '...'
                : isRejected
                ? '✖ Try again'
                : isChanged
                ? 'Submit'
                : '✔'
            }
            </button>
            {isRejected ? <pre style={{ color: 'red' }}>{error.message}</pre> : null}
        </form>
    )
}
