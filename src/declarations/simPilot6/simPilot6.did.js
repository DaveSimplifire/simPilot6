export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'docs' : IDL.Func([IDL.Text], [IDL.Text], []),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
