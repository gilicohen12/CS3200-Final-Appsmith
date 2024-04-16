export default {
	writeToStore: () => {
		// storeValue("Username", selectUsername.selectedOptionValue) // Boolean
		storeValue("Username", "aokell11"),
		storeValue("BlogID", "41")
		return appsmith.store.BlogID
	}
}
