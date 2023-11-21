import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      Sorry! Error! Please use this <Link to="/">link</Link> to navigate to our
      home page
    </div>
  );
}
