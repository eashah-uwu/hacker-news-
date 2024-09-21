import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const searchSchema = z.object({
  search: z.string(),
});

type SearchFormData = z.infer<typeof searchSchema>;

function Search() {

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
  });

  const onSubmit = (data: SearchFormData) => {

    console.log('Search Term:', data.search);
    reset({ search: '' }); 
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='mr-2' >Search:             </label>
        <Controller
          name="search" 
          control={control}
          render={({ field }: { field: any }) => (
            <input
              className={`w-32 rounded-sm border-1 border-black  text-black`}
              type="text"
              id="search"
              {...field} 
            />
          )}
        />
        {/* {errors.search && (
          <p className="text-red-500 text-sm">{errors.search.message}</p>
        )} */}
        
      </form>
    </div>
  );
}

export default Search;
