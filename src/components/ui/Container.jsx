function Container({ children, className = "", ...props }) {
  return (
    <div {...props} className={`max-w-6xl mx-auto px-6 ${className}`}>
      {children}
    </div>
  )
}

export default Container
