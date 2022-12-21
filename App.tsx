import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'
import { AuthProvider } from './src/contexts/AuthContext'

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<Routes />
				<StatusBar style="light" />
			</AuthProvider>
		</NavigationContainer>
	)
}
