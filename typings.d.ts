interface LinkProps {
  isMulti: string;
  id: string;
  title: string;
  slug: string;
  order: number;
  status: "ACTIVE" | "INACTIVE";
  pageType: "dynamic" | "static";
  userId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  sublinks: SubLinkProps[];
  user: User;
}

interface SubLinkProps {
  id: string;
  linkId: string;
  userId: string;
  title: string;
  subtitle: string;
  slug: string;
  order: number;
  status: "ACTIVE" | "INACTIVE";
  content: string;
  pageType: "static" | "dynamic";
  createdAt: string;
  updatedAt: string;
  Subsublinks: SubsubLinkProps[];
  user: User;
  link: LinkProps;
}

interface SubsubLinkProps {
  id: string;
  sublinkId: string;
  userId: string;
  title: string;
  slug: string;
  order: number;
  status: "ACTIVE" | "INACTIVE";
  content: string;
  pageType: "static" | "dynamic";
  createdAt: string;
  updatedAt: string;
  user: User;
  subLinks: SubLinkProps;
}

interface SelectProps {
  id: string;

  departmentName?: string;

  doctors?: PeopleProps[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
  departments?: any;
  label?: string;
}

interface PeopleProps {
  id: string;
  salutation: string;
  firstName: string;
  slug: string;
  lastName: string;
  email: string;
  phone: string;
  departmentId: string;
  designation: string;
  qualification: string;
  opdTiming: string;
  opdDays: string;
  address: string;
  showEmail: string;
  showPhone: string;
  status: string;
  profileUrl: string;
  bio: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;

  department: DepartmentProps;
}
