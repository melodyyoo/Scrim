'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation'

export default function HomePage() {
    const {push} = useRouter()
  return (
    <>
      <button onClick={()=>push('/about')}>
        <FontAwesomeIcon icon={faPersonRunning} size="2x" />
      </button>
    </>
  );
}
