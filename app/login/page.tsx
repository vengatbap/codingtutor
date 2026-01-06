
import Link from 'next/link';
import { Form } from 'app/form';
import { signIn } from 'app/auth';
import { SubmitButton } from 'app/submit-button';

export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign In</h3>
          <p className="text-sm text-gray-500">
            Use your email and password to sign in
          </p>
        </div>
        <Form
          action={async (formData: FormData) => {
            'use server';
            await signIn('credentials', {
              redirectTo: '/protected',
              email: formData.get('email') as string,
              password: formData.get('password') as string,
            });
          }}
        >
          <SubmitButton>Sign in</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {"Don't have an account? "}
            <Link href="/register" className="font-semibold text-gray-800">
              Sign up
            </Link>
            {' for free.'}
          </p>
        </Form>
      </div>
    </div>
  );
}

// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function LoginPage() {
//   const { data: session } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     if (session) {
//       router.push("/home");
//     }
//   }, [session]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="p-8 bg-white shadow rounded-lg text-center">
//         <h1 className="text-2xl font-bold mb-4">👋 Welcome</h1>
//         <p className="text-gray-600 mb-6">
//           Ready to continue learning with your AI tutor?
//         </p>

//         <button
//           onClick={() => signIn("google")}
//           className="w-full mb-3 bg-red-500 text-white py-2 rounded"
//         >
//           Continue with Google
//         </button>

//         <button
//           onClick={() => signIn("instagram")}
//           className="w-full mb-3 bg-pink-500 text-white py-2 rounded"
//         >
//           Continue with Instagram
//         </button>

//         <button
//           onClick={() => signIn("email")}
//           className="w-full bg-gray-800 text-white py-2 rounded"
//         >
//           Continue with Email
//         </button>
//       </div>
//     </div>
//   );
// }
