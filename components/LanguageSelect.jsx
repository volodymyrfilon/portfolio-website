import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@radix-ui/react-select'

const LanguageSelect = () => {
	return (
		<Select className='w-[180px]'>
			<SelectTrigger>
				<SelectValue placeholder='Select a language' />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Language</SelectLabel>
					<SelectItem value='ua'>UA</SelectItem>
					<SelectItem value='pl'>PL</SelectItem>
					<SelectItem value='en'>DE</SelectItem>
					<SelectItem value='de'>EN</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export default LanguageSelect
