import Icon from './Icon';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export default function SearchBox({ value, onChange, placeholder }: SearchBoxProps) {
  return (
    <label className="search-box">
      <Icon name="search" size={16} />
      <input
        type="search"
        placeholder={placeholder}
        aria-label={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
