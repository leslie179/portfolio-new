import styles from './One.module.css';

const LeftRight = ({ leftContent, rightContent }) => {
    return (
      <div className="flex items-center justify-between gap-4 p-4 max-w-4xl mx-auto">
        <div className="w-1/2 p-4 bg-gray-100 rounded-lg shadow-md">
          {leftContent}
        </div>
        <div className="w-1/2 p-4 bg-gray-200 rounded-lg shadow-md">
          {rightContent}
        </div>
      </div>
    );
  };