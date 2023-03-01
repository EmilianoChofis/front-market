import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './components/auth/authContext';
import { AppRouter } from './components/routes/AppRouter';

export const init = ()=>{
	return JSON.parse(localStorage.getItem("user")) || {logged:false}
}

export const App = () => {
	const [user, dispatch] = useReducer(authReduce,{}, init)
	useEffect(()=>{
		if(!user) return;
		localStorage.setItem("user", JSON.stringify(user)) 
	},[user])

	return(
		<AuthContext.Provider value={{dispatch, user}} >
			<AppRouter/>
		</AuthContext.Provider>
	)
};
