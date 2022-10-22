import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SideBarProvider = ({ children }) => {
	const [focus, setFocus] = useState({ value: 'home' });
	return (
		<SidebarContext.Provider value={{ focus, setFocus }}>
			{children}
		</SidebarContext.Provider>
	);
};

export const useSidebarContext = () => {
	const SideContext = useContext(SidebarContext);
	if (SideContext === undefined) {
		throw new Error('useSidebarContext must be used within a SideContext');
	}
	return SideContext;
};
