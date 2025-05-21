interface CourseModuleProps {
  title: string;
  description: string;
}

export function DetailedBullet({ title, description }: CourseModuleProps) {
  return (
    <li className="flex items-start">
      <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>
      <div>
        <span className="font-medium text-gray-900">{title}</span>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </li>
  );
}
