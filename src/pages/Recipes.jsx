import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, ChefHat, Search, Filter } from 'lucide-react';

// Sample recipes data
const recipes = [
  {
    id: 1,
    title: 'Acai Power Bowl',
    description: 'A refreshing and nutritious bowl packed with antioxidants and superfoods',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop',
    prepTime: '10 min',
    cookTime: '5 min',
    servings: 2,
    difficulty: 'Easy',
    category: 'Breakfast',
    ingredients: ['Acai berries', 'Banana', 'Granola', 'Coconut flakes', 'Honey'],
    instructions: [
      'Blend frozen acai berries with banana',
      'Pour into a bowl',
      'Top with granola and coconut flakes',
      'Drizzle with honey and serve'
    ]
  },
  {
    id: 2,
    title: 'Green Detox Smoothie',
    description: 'A vibrant green smoothie loaded with vitamins and minerals',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&h=400&fit=crop',
    prepTime: '5 min',
    cookTime: '0 min',
    servings: 1,
    difficulty: 'Easy',
    category: 'Smoothies',
    ingredients: ['Spinach', 'Kale', 'Green apple', 'Cucumber', 'Lemon', 'Ginger'],
    instructions: [
      'Wash all vegetables thoroughly',
      'Add all ingredients to blender',
      'Blend until smooth',
      'Serve immediately'
    ]
  },
  {
    id: 3,
    title: 'Quinoa Buddha Bowl',
    description: 'A colorful and satisfying bowl with quinoa, roasted vegetables, and tahini',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
    prepTime: '15 min',
    cookTime: '25 min',
    servings: 2,
    difficulty: 'Medium',
    category: 'Lunch',
    ingredients: ['Quinoa', 'Sweet potato', 'Broccoli', 'Chickpeas', 'Tahini', 'Lemon'],
    instructions: [
      'Cook quinoa according to package instructions',
      'Roast sweet potato and broccoli',
      'Prepare tahini dressing',
      'Assemble bowl with all ingredients'
    ]
  },
  {
    id: 4,
    title: 'Berry Oat Parfait',
    description: 'Layered parfait with fresh berries, creamy oats, and Greek yogurt',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: 1,
    difficulty: 'Easy',
    category: 'Breakfast',
    ingredients: ['Oats', 'Greek yogurt', 'Mixed berries', 'Honey', 'Granola'],
    instructions: [
      'Layer oats in a glass',
      'Add Greek yogurt',
      'Top with fresh berries',
      'Drizzle with honey and granola'
    ]
  },
  {
    id: 5,
    title: 'Veggie Power Soup',
    description: 'A hearty vegetable soup packed with nutrients and flavor',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop',
    prepTime: '15 min',
    cookTime: '30 min',
    servings: 4,
    difficulty: 'Medium',
    category: 'Soups',
    ingredients: ['Carrots', 'Celery', 'Onion', 'Tomatoes', 'Vegetable broth', 'Herbs'],
    instructions: [
      'Sauté vegetables until tender',
      'Add vegetable broth',
      'Simmer for 20 minutes',
      'Season with herbs and serve'
    ]
  },
  {
    id: 6,
    title: 'Chia Seed Pudding',
    description: 'Creamy chia pudding with mango and coconut',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&h=400&fit=crop',
    prepTime: '5 min',
    cookTime: '0 min',
    servings: 2,
    difficulty: 'Easy',
    category: 'Desserts',
    ingredients: ['Chia seeds', 'Coconut milk', 'Mango', 'Honey', 'Vanilla'],
    instructions: [
      'Mix chia seeds with coconut milk',
      'Add honey and vanilla',
      'Refrigerate overnight',
      'Top with fresh mango and serve'
    ]
  },
];

const Recipes = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const categories = ['All', 'Breakfast', 'Lunch', 'Smoothies', 'Soups', 'Desserts'];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-dark-200">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-200 via-dark-100 to-dark-200">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-600 to-accent-orange rounded-full mb-6 glow-red"
            >
              <ChefHat className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Healthy Recipes
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Discover delicious and nutritious recipes to fuel your body
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for recipes..."
                className="w-full pl-12 pr-4 py-4 glass-dark rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-accent-orange text-white glow-red'
                    : 'glass text-white/70 hover:text-white hover:bg-black/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredRecipes.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-white/70">No recipes found</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map((recipe, index) => (
                <motion.div
                  key={recipe.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedRecipe(recipe)}
                  className="group glass-dark rounded-2xl overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-white/5 hover:border-glow-orange cursor-pointer"
                >
                  {/* Recipe Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 glass rounded-full text-white text-sm font-semibold">
                      {recipe.category}
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1.5 glass rounded-full text-white text-sm font-semibold">
                      {recipe.difficulty}
                    </div>
                  </div>

                  {/* Recipe Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {recipe.title}
                    </h3>
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {recipe.description}
                    </p>

                    {/* Recipe Meta */}
                    <div className="flex items-center gap-4 text-white/70 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.prepTime} + {recipe.cookTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{recipe.servings} servings</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedRecipe(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-dark rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
          >
            {/* Recipe Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Recipe Details */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedRecipe.title}
                  </h2>
                  <p className="text-white/70 text-lg">
                    {selectedRecipe.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="text-white/70 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Recipe Meta */}
              <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-white/10">
                <div className="flex items-center gap-2 text-white/70">
                  <Clock className="w-5 h-5" />
                  <span>Prep: {selectedRecipe.prepTime} | Cook: {selectedRecipe.cookTime}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Users className="w-5 h-5" />
                  <span>{selectedRecipe.servings} servings</span>
                </div>
                <div className="px-3 py-1 glass rounded-full text-white text-sm">
                  {selectedRecipe.difficulty}
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ingredients</h3>
                <ul className="space-y-2">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80">
                      <span className="w-2 h-2 bg-accent-orange rounded-full"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Instructions</h3>
                <ol className="space-y-4">
                  {selectedRecipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4 text-white/80">
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-orange rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </span>
                      <span className="pt-1">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Recipes;
