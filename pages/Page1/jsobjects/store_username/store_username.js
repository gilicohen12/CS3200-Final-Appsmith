export default {
	writeToStore: () => {
		storeValue("Username", selectUsername.selectedOptionValue) // Boolean
		 
		return appsmith.store.Username
	}
}
