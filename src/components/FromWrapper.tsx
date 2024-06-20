type FormWrapperProps = {
  children: React.ReactNode;
};

function FormWrapper({ children }: FormWrapperProps) {
  return <form onSubmit={(e) => e.preventDefault()}>{children}</form>;
}

export { FormWrapper };
