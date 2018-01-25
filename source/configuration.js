let configuration =
{
	reducer: 'form',
	trim: true,
	defaultRequiredMessage: () => 'Required',
	defaultErrorHandler: (error) => false
}

export function get_configuration()
{
	return configuration
}

// In the current implementation
// `configuration` must not be a nested object.
export function configure(settings)
{
	configuration = { ...configuration, ...settings }
}