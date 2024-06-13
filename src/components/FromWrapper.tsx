type FormWrapperProps = {
  children: React.ReactNode;
};

export default function FormWrapper({ children }: FormWrapperProps) {
  return <form onSubmit={(e) => e.preventDefault()}>{children}</form>;
}
